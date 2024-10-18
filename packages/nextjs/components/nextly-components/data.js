import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitMainImg from "../../public/img/benefitMain.png";
import benefitOneImg from "../../public/img/benefitOne.png";
import benefitTwoImg from "../../public/img/benefitTwo.png";

const benefitMain = {
  title: "Web3 Legal Automation + Viral Marketing for Exponential Growth",
  desc: "CryptoLawyer.net combines smart contract-based legal automation with compliant viral marketing strategies to scale your business efficiently and securely.",
  image: benefitMainImg,
  bullets: [
    {
      title: "Smart Contract Legal Automation",
      desc: "Streamline complex legal processes with tokenization, smart contracts, and automated compliance systems designed for web3 businesses.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Viral Marketing with Tap-to-Earn",
      desc: "Leverage interactive, HTML5-based 'tap-to-earn' campaigns to grow your audience while ensuring compliance across every marketing effort.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Incentivized Referrals for Exponential Expansion",
      desc: "Our compliant viral marketing model rewards users for referring others, driving exponential growth by turning every user into a brand advocate.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitOne = {
  title: "Go To Market Quickly & Efficiently",
  desc: "Our platform integrates marketing with multi-jurisdictional compliance, enabling businesses to operate seamlessly across borders while maintaining legal integrity.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Multi-Jurisdictional Compliance Automation",
      desc: "Automate regulatory compliance processes across multiple jurisdictions, ensuring your operations remain lawful and efficient.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Provable Compliance in Every Campaign",
      desc: "Guarantee that each marketing and legal effort complies with global regulatory standards, providing transparency and trust for your business.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Customized Smart Contracts for Global Operations",
      desc: "Leverage customizable smart contracts to reduce legal complexity while scaling your business internationally.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Exponential Benefits",
  desc: "Increase Engagement, Reducing Risk & Enhancing Profitability with Gamified Legal Tech.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Engagement Fostered by Games",
      desc: "Participate in a competitive ecosystem that enforces crypto-asset integrity and mitigates legal risks.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Compliance Enhanced by Smart Contracts",
      desc: "Align legal automation with compliance strategies to maximize ecosystem profitability and reduce operational friction.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Scalable Global Operations",
      desc: "Realize the blockchain+smart contract future with embedded technology and experienced services.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo, benefitMain };
