import SectionHeader from "../ui-elements/section-header";

const ContactMe = () => {
  return (
    <div className="py-10 sm:py-20 lg:py-32">
      <SectionHeader title="Let's work together..." />
      <div className="flex items-start justify-between gap-x-8">
        <div className="w-1/2 space-y-3">
          <h2 className="text-2xl text-headings">Get in touch with me</h2>
          <p className="text-par leading-relaxed first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-btn-bg first-letter:mr-3 first-letter:float-left">
            Have a project in mind or need an expert to bring your ideas to
            life? Let&apos;s create something amazing together! Whether
            you&apos;re looking for a seamless web experience, performance
            optimization, or custom development, I&apos;m here to help. Reach
            out today, and let&apos;s make it happen!
          </p>
        </div>
        <div className="w-1/2 bg-card-bg h-[500px] rounded-lg p-4 sm:px-8 sm:pt-8 sm:pb-12">
          <h1>Contact Form</h1>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
