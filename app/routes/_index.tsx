function ContactLink({
  href,
  text,
  textColor,
}: {
  href: string;
  text: string;
  textColor: string;
}) {
  return (
    <a href={href} rel="noreferrer" target="_blank">
      <p className={`font-mono font-bold text-lg ${textColor}`}>{text}</p>
    </a>
  );
}
export default function Index() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center md:justify-start md:mt-32">
      <div className="md:max-w-md">
        <div className="rounded-lg w-full p-4 flex flex-col items-center">
          <img alt="me" src="/me.jpeg" className="w-44 h-44 rounded-full" />
          <div className="w-full flex flex-col items-center">
            <h1 className="mt-4 font-mono font-extrabold text-3xl text-center">
              Erlan Belekov
            </h1>
            <p className="font-mono mt-2 text-center text-lg font-light">
              Software Engineer from Bishkek 🇰🇬👨🏻‍💻
            </p>
            <div className="mt-4 flex gap-4 items-center justify-center">
              <ContactLink
                href="https://github.com/ErlanBelekov"
                text="github"
                textColor="text-black-600"
              />
              <ContactLink
                href="https://twitter.com/erlan_belekov"
                text="twitter"
                textColor="text-blue-400"
              />
              <ContactLink
                href="https://www.linkedin.com/in/erlanbelekov/"
                text="linkedin"
                textColor="text-blue-700"
              />
            </div>
            <p className="mt-4 font-mono text-center">
              hi! I am a programmer, passionate about sharing knowledge, making
              some cool stuff and eating pizza! That&apos;s it for me. Bye!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
