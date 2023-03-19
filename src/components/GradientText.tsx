import { Source_Code_Pro } from "next/font/google";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code-pro",
});

interface GradientTextProps {
  text: string;
  size: string;
}

const GradientText = ({ text, size }: GradientTextProps) => {
  return (
    // <div className="relative">
    <span
      className={`${sourceCodePro.className} ${size} text-transparent bg-gradient-to-r bg-clip-text from-purple-500 via-blue-500 to-blue-500`}
    >
      {text}
    </span>
    // </div>
  );
};

export default GradientText;
