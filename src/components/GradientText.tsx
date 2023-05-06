// FONTS
import { workSans } from "../../lib/fonts/workSans";

// TYPESCRIPT
interface GradientTextProps {
  text: string;
  size: string;
}

const GradientText = ({ text, size }: GradientTextProps) => {
  return (
    <span
      className={`${workSans.className} ${size} text-transparent bg-gradient-to-r bg-clip-text from-purple-500 via-blue-500 to-blue-500`}
    >
      {text}
    </span>
  );
};

export default GradientText;
