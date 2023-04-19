import Image from "next/image";
import Link from "next/link";
import React from "react";
import featuredImage from "../../../../../public/assets/images/friends.jpg"

const FeaturedItem = () => {
  return (
    <Link
      rel="noopener noreferrer"
      href="#"
      className="card-featured group"
    >
      <Image
        role="presentation"
        sizes="33vw"
        className="object-cover w-full rounded h-44 "
        src={featuredImage}
        alt="Featured"
      />
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          In usu laoreet repudiare legendos
        </h3>
        <span className="text-xs">January 21, 2021</span>
        <p>
          Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur,
          ex has tantas percipit perfecto. At per tempor albucius perfecto, ei
          probatus consulatu patrioque mea, ei vocent delicata indoctum pri.
        </p>
      </div>
    </Link>
  );
};

export default FeaturedItem;