import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container } from "@/components/nextly-components/Container";

export function Footer() {

  const legal = ["Privacy"];
  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              {"Cryptolawyer.net"}
              
            </div>

            

            
          </div>

          <div>
            
          </div>
          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {legal.map((item, index) => (
                <Link
                  key={index}
                  href="/privacy-policy"
                  className="w-full px-4 py-2 text-gray-400 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          
        </div>

        <div className="my-10 text-sm text-center text-gray-400 dark:text-gray-400">
          Copyright © {new Date().getFullYear()} by Cryptolawyer.net
        </div>
      </Container>
      {/* Do not remove this */}
      <Backlink />
    </div>
  );
}



const Backlink = () => {
  return (
    <div></div>
  );
};