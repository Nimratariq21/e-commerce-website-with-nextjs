import React from 'react';

interface GuarantyCardProps {
  title: string; // Title must be a string
  desc: string; // Description must be a string
}

const GuarantyCard: React.FC<GuarantyCardProps> = ({ title, desc }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <h1 className="text-2xl md:text-3xl tracking-wider font-semibold">{title}</h1>
      <p
        className="text-[.9em] md:text-[1.2em] font-medium tracking-wide text-[#4F4F4F]"
        dangerouslySetInnerHTML={{ __html: desc }}
      />
    </div>
  );
};

const Gurantees: React.FC = () => {
  return (
    <div className="cp w-full flex-between gap-x-[1em] gap-y-[2rem] mt-[3rem] py-[3rem] md:py-[5rem] flex-wrap bg-[#FAF4F4]">
      <GuarantyCard
        title="Free Delivery"
        desc="For all orders over $50, consectetur <br/> adipiscing elit"
      />
      <GuarantyCard
        title="90 Days Return"
        desc="If goods have problems, consectetur <br/> adipiscing elit"
      />
      <GuarantyCard
        title="Secure Payment"
        desc="100% secure payment, consectetur <br/> adipiscing elit"
      />
    </div>
  );
};

export default Gurantees;
