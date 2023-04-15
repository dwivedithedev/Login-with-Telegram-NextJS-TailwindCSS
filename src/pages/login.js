import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import TelegramLoginButton, { TelegramUser } from "telegram-login-button";

export const LoginPage = () => {
  const router = useRouter();

  const handleTelegramResponse = async (response) => {

    router.push({
      pathname: "/dashboard",
      query: { res: response },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-black text-center mb-8">
        Login with Telegram
      </h1>
      <TelegramLoginButton
        dataOnauth={handleTelegramResponse}
        botName="ProjectGQBot" //TODO - Add your Telegram Bot name.
        className="w-64 h-12 flex items-center justify-center rounded-md text-lg font-semibold focus:outline-none"
      />
    </div>
  );
};
