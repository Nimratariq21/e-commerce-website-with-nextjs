import React from 'react';
import WebsiteBanner from '@/components/WebBanner';
import Input from '@/components/Input';
import Gurantees from '@/components/Gurantee';
import Guide from '@/components/guide';

const page = () => {
  return (
    <div>
      <WebsiteBanner title={'Contact'} />
      <div className="cp py-[2rem] flex-between flex-col md:py-[3rem]">
        <h1 className="capitalize text-[1.8em] tracking-wide font-semibold md:text-[2.4em]">
          Get in Touch With US
        </h1>
        <p className="text-[.9em] text-[#9F9F9F] text-center font-medium md:text-[1em]">
          For More Information About Our Product & Services. Please Feel Free To Drop Us <br className="hidden md:block" />
          An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
        <main className="cp w-full justify-between md:flex gap-5 mt-[3em]">
          <section className="md:w-[40%] gap-6 md:cp flex flex-col items-center justify-center">
            <Guide src="/images/Location.png" title="Address" desc="236 5th SE Avenue, New York NY10000, United States" />
            <Guide src="/images/Phone.png" title="Phone" desc="Mobile: +(84) 546-6789 <br/> Hotline: +(84) 456-6789" />
            <Guide src="/images/Clonk.png" title="Working Time" desc="Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00" />
          </section>
          <br className="block md:hidden" />
          <br className="block md:hidden" />
          <section className="md:w-[60%] flex flex-col md:items-center gap-y-6 w-full">
            <Input title="Your Name" placeholder="ABC" />
            <Input title="Email Address" placeholder="Abc@defgmail.com" />
            <Input title="Subject" placeholder="This is an optional" />
            <Input title="Message" placeholder="Hey! I'd Like to ask About." />
          </section>
        </main>
      </div>
      <Gurantees />
    </div>
  );
};

export default page;
