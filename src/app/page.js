import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#141414] min-h-screen flex justify-center items-center">
      <div className="w-[346px] h-[552px] bg-[#1F1F1F] rounded-[20px]">
        <div className="flex flex-col items-center mt-9 gap-5">
          <img src="avatar-jessica.jpeg" alt="jessica" className="rounded-full w-[82px] h-[82px]"></img>
          <div className="flex flex-col items-center">
            <h1 className="text-white text-[25px]">Jessica Randall</h1>
            <h1 className="text-[#C1D870] font-bold text-[14px]">London, United Kingdom</h1>
          </div>
          <p className="text-[#aaaaaa] text-[14px]">"Front-end developer and avid reader."</p>
        </div>
        <div className="flex flex-col items-center gap-3 mt-5">
          <div className="text-white font-bold bg-[#333333] w-[274px] h-[41px] flex flex-col items-center justify-center rounded-md"><a href="https://github.com">GitHub</a></div>
          <div className="text-white font-bold bg-[#333333] w-[274px] h-[41px] flex flex-col items-center justify-center rounded-md"><a href="https://www.frontendmentor.io">Frontend Mentor</a></div>
          <div className="text-white font-bold bg-[#333333] w-[274px] h-[41px] flex flex-col items-center justify-center rounded-md"><a href="https://www.linkedin.com">LinkedIn</a></div>
          <div className="text-white font-bold bg-[#333333] w-[274px] h-[41px] flex flex-col items-center justify-center rounded-md"><a href="https://twitter.com">Twitter</a></div>
          <div className="text-white font-bold bg-[#333333] w-[274px] h-[41px] flex flex-col items-center justify-center rounded-md"><a href="https://www.instagram.com">Instagram</a></div>
        </div>
      </div>
    </div>
  );
}
