import Image from "next/image";
import React from "react";
import Link from "next/link"; // Import Link from Next.js
import { Container } from "@/components/nextly-components/Container";

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-800 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              <Mark>Blanca</Mark>
            </p>
            <p className="text-2xl leading-normal ">
              Marketing + Disclosure Whitepaper Generator 
            </p>
            <p className="text-2xl leading-normal ">
              $99 
            </p>
            <div className="h-8"></div> {/* 8 is for the spacing, can be adjusted to your needs */}

            {/* Button added for redirection */}
            <Link href="/subscription" passHref>
              <button className="bg-yellow-500 text-black text-4xl py-2 px-6 rounded-md hover:bg-yellow-600 transition-colors">
                >>Get
              </button>
            </Link>
          </div>
        </div>

        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-800 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Tap-to-Learn & Earn
            </p>
            <p className="text-2xl leading-normal ">
              <Mark>Network Effects</Mark>
            </p>
            <p className="text-2xl leading-normal ">
              Provable Compliance
            </p>
            <div className="h-8"></div> {/* 8 is for the spacing, can be adjusted to your needs */}

            {/* Button added for redirection */}
            <Link href="/subscription" passHref>
              <button className="bg-yellow-500 text-black text-4xl py-2 px-6 rounded-md hover:bg-yellow-600 transition-colors">
                >>More
              </button>
            </Link>
          </div>
        </div>

        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-800 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              <Mark>CryptoLawyer</Mark>.net
            </p>
            <p className="text-2xl leading-normal ">
              (code + law) x (games)
            </p>
            <p className="text-2xl leading-normal ">
              Join us on Telegram
            </p>
            <div className="h-8"></div> {/* 8 is for the spacing, can be adjusted to your needs */}

            {/* Button added for redirection */}
            <Link href="/subscription" passHref>
              <button className="bg-yellow-500 text-black text-4xl py-2 px-6 rounded-md hover:bg-yellow-600 transition-colors">
                >>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="text-yellow-800 bg-yellow-100 rounded-md ring-yellow-100 ring-4 dark:ring-yellow-900 dark:bg-yellow-900 dark:text-yellow-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
