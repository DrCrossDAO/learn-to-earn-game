'use client';

import { Section, Cell, Image, List } from '@telegram-apps/telegram-ui';
import { useTranslations } from 'next-intl';
import { Link } from '@/components/Link/Link';

import tonSvg from './_assets/ton.svg';

export default function Home() {
  const t = useTranslations('i18n');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-lightText"> {/* Dark background */}
      <h1 className="text-5xl font-bold text-yellow-400 mb-8">Token Trials Academy</h1> {/* Main Title */}
      <p className="text-xl text-gray-400 mb-6 text-center">by Cryptolawyer.net</p> {/* Subtitle */}

      {/* TON Wallet Connect Section */}
      <div className="w-full max-w-lg mb-8">
        <Section
          header="Connect Your Wallet"
          footer=""
          className="bg-gray-800 rounded-lg p-4"
        >
          <Link href="/ton-connect">
            <Cell
              before={
                <Image
                  src={tonSvg.src}
                  style={{ backgroundColor: '#007AFF' }}
                />
              }
              subtitle="Connect your TON wallet"
              className="text-yellow-400"
            >
              TON Connect
            </Cell>
          </Link>
        </Section>
      </div>

      {/* Learn to Earn Section */}
      <div className="w-full max-w-lg">
        <Section
          header="Tap to Learn to Earn"
          footer="Token Trials Academy by Cryptolawyer.net"
          className="bg-gray-800 rounded-lg p-4"
        >
          <Link href="/easy/1">
            <Cell subtitle="Learn about global crypto-law" className="text-yellow-400">
              Learn to Earn
            </Cell>
          </Link>
          <Link href="/easy/1">
            <Cell subtitle="Collect TON" className="text-yellow-400">
              Collect TON
            </Cell>
          </Link>
          <Link href="/easy/1">
            <Cell subtitle="Launch Token Trials Academy" className="text-yellow-400">
              Start Game
            </Cell>
          </Link>
        </Section>
      </div>
    </div>
  );
}
