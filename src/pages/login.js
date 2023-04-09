import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import TelegramLoginButton, { TelegramUser } from "telegram-login-button";

import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ruccaghopbvowacblzuu.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export const LoginPage = () => {
  const router = useRouter();

  const handleTelegramResponse = async (response) => {
    const { id, first_name, photo_url } = response;

    // Check if user already exists in the users table
    const { data: existingUser, error: existingUserError } = await supabase
      .from("users")
      .select("id")
      .eq("id", id);
    if (existingUserError) {
      console.error(existingUserError);
      return;
    }
    if (existingUser && existingUser.length > 0) {
      router.push({
        pathname: "/dashboard",
        query: { userId: id },
      });
      console.log("USER FOUND!", id);
      return;
    }

    // Not old? New user! Store user data in the Users table
    const { data: user, error: insertError } = await supabase
      .from("users")
      .insert({
        id,
        username: first_name || "defaultName",
        email: `${id}@projectgq`,
        profilePicture: photo_url,
      });
    const { error: insightsError } = await supabase.from("insights").insert({
      id,
      isActive: false,
      streak: 0,
      goalName: null,
      targetDate: null,
      accountabilitypartnerid: null,
      reminderTime: null,
    });

    //throw error if any issue
    if (insightsError || insertError) {
      console.error(insertError || insightsError);
      return;
    }

    router.push({
      pathname: "/dashboard",
      query: { userId: id },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-black text-center mb-8">
        Login with Telegram
      </h1>
      <TelegramLoginButton
        dataOnauth={handleTelegramResponse}
        botName="ProjectGQBot"
        className="w-64 h-12 flex items-center justify-center rounded-md text-lg font-semibold focus:outline-none"
      />
    </div>
  );
};
