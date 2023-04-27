import Link from "next/link";
import React from "react";

const Sponsor = () => {
  return (
    <section className="p-6 bg-gray-50 mt-6">
	<div className="container mx-auto max-w-6xl 2xl:max-w-7xl">
		<span className="block mb-2 text-xs font-medium tracking-widest text-center uppercase dark:text-violet-400">Be a part of it</span>
		<h2 className="text-5xl font-bold text-center">Be A Part of It</h2>
		<div className="grid gap-6 my-16 lg:grid-cols-3">
			<div className="flex flex-col items-center justify-between p-8 space-y-4 rounded-md bg-gray-200">
				<div className="flex items-center justify-center text-3xl font-bold rounded-full">Be a sponsor</div>
				<p className="text-xl text-center">
					<b>Nulla.</b>Nostrum, corrupti blanditiis. Illum, architecto? Nostrum, corrupti blanditiis. Illum, architecto?
				</p>
                <Link className="btn-featured w-fit" href="">Apply</Link>
			</div>
			<div className="flex flex-col justify-between items-center p-8 space-y-4 rounded-md bg-gray-200">
				<div className="flex items-center justify-center text-3xl font-bold rounded-full">Be a fundraiser</div>
				<p className="text-xl text-center">
					<b>Accusantium.</b>Vitae saepe atque neque sunt eius dolor veniam alias debitis?
				</p>
                <Link className="btn-featured w-fit" href="">Apply</Link>
			</div>
			<div className="flex flex-col items-center justify-between p-8 space-y-4 rounded-md bg-gray-200">
				<div className="flex items-center justify-center text-3xl font-bold rounded-full">Be a volunteer</div>
				<p className="text-xl text-center">
					<b>Maxime.</b>Expedita temporibus culpa reprehenderit doloribus consectetur odio!
				</p>
                <Link className="btn-featured w-fit" href="">Apply</Link>
			</div>
		</div>
	</div>
</section>
  );
};

export default Sponsor;
