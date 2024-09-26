import Image from "next/image";
import FormInput from "./components/form-input";

export default function Home() {
  return (
    <div>
      <svg
        data-slot="icon"
        fill="red"
        strokeWidth="1.5"
        stroke="white"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="text-red-500 h-20"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
        ></path>
      </svg>
      <FormInput type="email" placeholder="Username" required errors={[]} />
      <FormInput type="" placeholder="Username" required errors={[]} />
      <FormInput type="text" placeholder="Username" required errors={[]} />
      <div>aaa</div>
    </div>
  );
}
