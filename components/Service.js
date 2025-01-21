import Image from "next/image";
import React from "react";
import Link from "next/link";
import { images } from "./demodata";

const Service = () => {
  return (
    <div className="w-full mt-[46px] mb-[50px]">
      {/* Service header section */}

      <div className="container_1300 relative overflow-hidden ">
        <div className="flex justify-start items-center gap-[20px]">
          <div>
            <Image
              src={images.bar}
              alt="bar"
              className="w-[38px] h-[4px] sm:w-[88px] sm:h-[5px]"
            ></Image>
            <Image
              src={images.bar}
              alt="bar"
              className="w-[38px] h-[4px] sm:w-[88px] sm:h-[5px] ml-[22px]"
            ></Image>
          </div>
          <h1 className="text-base font-normal sm:text-[20px] sm:font-semibold md:text-[28px] sm:leading-[44.07px] text-[#252531]">
            Our Service
          </h1>
        </div>
        <h1 className="text-[22px] font-medium leading-[34px]  md:leading-[75px] sm:text-4xl sm:font-semibold  md:text-5xl md:font-bold pt-2">
          We Provide Best
          <br />
          Interior Design Services{" "}
        </h1>
        <Image
          src={images.service_dashline}
          alt="bar"
          className="absolute right-[-230px] ss:right-[-300px] xs:top-[-30px] md:right-[-150px] xl:right-[-100px] top-[10px] "
        ></Image>
      </div>

      {/* All services */}
      <div className="w-full container_1300 flex justify-center items-center mt-10 md:pt-0">
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
          {/* Architecture card */}
          <div className=" fontDesign box-border max-w-md border-2 px-7 py-5 border-[#B98E75] hover:bg-[#B98E75] hover:text-white service_design">
            <div className="flex color-item justify-between items-center ">
              <Image src={images.service1} alt="bar" className="w-36"></Image>
              <svg
                width="50"
                height="43"
                viewBox="0 0 50 43"
                fill="#B98E75"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.38 40.8L4.87068 41.6606L4.87724 41.6645L4.88386 41.6682L5.38 40.8ZM1.6 34.98L0.61729 35.1651L0.618847 35.1734L0.620543 35.1817L1.6 34.98ZM1.6 7.8L0.619907 7.60114L0.617788 7.61222L1.6 7.8ZM5.38 1.98L5.87614 2.84824L5.88276 2.84446L5.88932 2.84057L5.38 1.98ZM25 1.98L24.4829 2.83591L24.4933 2.8422L24.5039 2.84824L25 1.98ZM28.72 7.74L27.7378 7.92777L27.7391 7.93472L27.7405 7.94165L28.72 7.74ZM28.72 34.98L27.7405 34.7783L27.7391 34.7853L27.7378 34.7922L28.72 34.98ZM25 40.8L25.5039 41.6638L25.5093 41.6606L25 40.8ZM18.82 34.2L18.2535 33.376L18.2409 33.3846L18.2286 33.3936L18.82 34.2ZM20.02 31.08L19.0247 30.9829L20.02 31.08ZM18.82 8.52L18.2286 9.3264L18.2409 9.33541L18.2535 9.34404L18.82 8.52ZM11.56 8.52L10.9935 7.69596L10.9809 7.70459L10.9686 7.71359L11.56 8.52ZM10.36 11.7L9.36701 11.5818L9.36576 11.5923L9.36473 11.6029L10.36 11.7ZM10.36 31.08L9.36451 31.1748L9.36576 31.188L9.36736 31.2011L10.36 31.08ZM11.56 34.2L10.9686 35.0064L10.9809 35.0154L10.9935 35.024L11.56 34.2ZM15.22 41.48C10.6481 41.48 7.59527 40.9141 5.87614 39.9318L4.88386 41.6682C7.08473 42.9259 10.5919 43.48 15.22 43.48V41.48ZM5.88932 39.9394C4.22402 38.9538 3.0961 37.2878 2.57946 34.7783L0.620543 35.1817C1.2239 38.1123 2.61598 40.3262 4.87068 41.6606L5.88932 39.9394ZM2.58271 34.7948C2.0814 32.1341 1.82 27.6752 1.82 21.36H-0.18C-0.18 27.6848 0.0785992 32.3059 0.61729 35.1651L2.58271 34.7948ZM1.82 21.36C1.82 15.0438 2.08153 10.6067 2.58221 7.98777L0.617788 7.61222C0.0784717 10.4333 -0.18 15.0362 -0.18 21.36H1.82ZM2.58003 7.99884C3.09805 5.44577 4.22627 3.79102 5.87614 2.84824L4.88386 1.11175C2.61373 2.40897 1.22195 4.63422 0.61997 7.60115L2.58003 7.99884ZM5.88932 2.84057C7.60405 1.82573 10.6505 1.24 15.22 1.24V-0.760002C10.5895 -0.760002 7.07595 -0.18574 4.87068 1.11942L5.88932 2.84057ZM15.22 1.24C19.7926 1.24 22.8126 1.8268 24.4829 2.83591L25.5171 1.12408C23.3474 -0.186802 19.8474 -0.760002 15.22 -0.760002V1.24ZM24.5039 2.84824C26.1536 3.79095 27.2591 5.42378 27.7378 7.92777L29.7022 7.55222C29.1409 4.61622 27.7664 2.40905 25.4961 1.11175L24.5039 2.84824ZM27.7405 7.94165C28.2782 10.5532 28.56 15.0038 28.56 21.36H30.56C30.56 14.9962 30.2818 10.3668 29.6995 7.53835L27.7405 7.94165ZM28.56 21.36C28.56 27.7162 28.2782 32.1668 27.7405 34.7783L29.6995 35.1817C30.2818 32.3532 30.56 27.7238 30.56 21.36H28.56ZM27.7378 34.7922C27.259 37.2967 26.1513 38.9566 24.4907 39.9394L25.5093 41.6606C27.7687 40.3234 29.141 38.1033 29.7022 35.1678L27.7378 34.7922ZM24.4961 39.9362C22.8215 40.9131 19.795 41.48 15.22 41.48V43.48C19.845 43.48 23.3385 42.9269 25.5039 41.6638L24.4961 39.9362ZM15.22 35.86C16.1549 35.86 16.9701 35.8033 17.6503 35.6786C18.3152 35.5567 18.9356 35.3553 19.4114 35.0064L18.2286 33.3936C18.1044 33.4847 17.8248 33.6133 17.2897 33.7114C16.7699 33.8067 16.0851 33.86 15.22 33.86V35.86ZM19.3865 35.024C19.9309 34.6498 20.291 34.079 20.5333 33.449C20.7771 32.8151 20.9303 32.0483 21.0153 31.1771L19.0247 30.9829C18.9497 31.7517 18.8229 32.3249 18.6667 32.731C18.509 33.141 18.3491 33.3102 18.2535 33.376L19.3865 35.024ZM21.0153 31.1771C21.1808 29.4808 21.26 26.1926 21.26 21.36H19.26C19.26 26.2074 19.1792 29.3992 19.0247 30.9829L21.0153 31.1771ZM21.26 21.36C21.26 16.5274 21.1808 13.2392 21.0153 11.5429L19.0247 11.7371C19.1792 13.3208 19.26 16.5126 19.26 21.36H21.26ZM21.0153 11.5429C20.9303 10.6717 20.7771 9.90487 20.5333 9.27102C20.291 8.64096 19.9309 8.07019 19.3865 7.69596L18.2535 9.34404C18.3491 9.40981 18.509 9.57904 18.6667 9.98898C18.8229 10.3951 18.9497 10.9683 19.0247 11.7371L21.0153 11.5429ZM19.4114 7.71359C18.9356 7.36472 18.3152 7.16328 17.6503 7.04139C16.9701 6.91668 16.1549 6.86 15.22 6.86V8.86C16.0851 8.86 16.7699 8.91332 17.2897 9.00861C17.8248 9.10672 18.1044 9.23528 18.2286 9.3264L19.4114 7.71359ZM15.22 6.86C14.2846 6.86 13.4658 6.91676 12.7775 7.04087C12.1018 7.16273 11.4794 7.36185 10.9935 7.69596L12.1265 9.34404C12.2806 9.23814 12.5882 9.10727 13.1325 9.00912C13.6642 8.91324 14.3554 8.86 15.22 8.86V6.86ZM10.9686 7.71359C10.4507 8.09344 10.1095 8.66884 9.8744 9.29194C9.63555 9.92489 9.47237 10.6968 9.36701 11.5818L11.353 11.8182C11.4476 11.0232 11.5845 10.4251 11.7456 9.99805C11.9105 9.56116 12.0693 9.38655 12.1514 9.3264L10.9686 7.71359ZM9.36473 11.6029C9.19925 13.299 9.12 16.5671 9.12 21.36H11.12C11.12 16.5529 11.2008 13.381 11.3553 11.7971L9.36473 11.6029ZM9.12 21.36C9.12 26.1539 9.19931 29.4403 9.36451 31.1748L11.3555 30.9852C11.2007 29.3597 11.12 26.1661 11.12 21.36H9.12ZM9.36736 31.2011C9.473 32.0674 9.63675 32.8252 9.87665 33.449C10.1134 34.0646 10.4552 34.6299 10.9686 35.0064L12.1514 33.3936C12.0648 33.3301 11.9066 33.1554 11.7433 32.731C11.5833 32.3148 11.447 31.7326 11.3526 30.9589L9.36736 31.2011ZM10.9935 35.024C11.4794 35.3581 12.1018 35.5573 12.7775 35.6791C13.4658 35.8032 14.2846 35.86 15.22 35.86V33.86C14.3554 33.86 13.6642 33.8068 13.1325 33.7109C12.5882 33.6127 12.2806 33.4819 12.1265 33.376L10.9935 35.024ZM40.3731 42H39.3731V43H40.3731V42ZM40.3731 10.68H41.3731V9.179L39.9879 9.75716L40.3731 10.68ZM33.4731 13.56H32.4731V15.061L33.8583 14.4828L33.4731 13.56ZM33.4731 5.7L33.0149 4.81116L32.4731 5.09046V5.7H33.4731ZM43.1331 0.719999V-0.280001H42.8905L42.6749 -0.16884L43.1331 0.719999ZM49.7331 0.719999H50.7331V-0.280001H49.7331V0.719999ZM49.7331 42V43H50.7331V42H49.7331ZM41.3731 42V10.68H39.3731V42H41.3731ZM39.9879 9.75716L33.0879 12.6372L33.8583 14.4828L40.7583 11.6028L39.9879 9.75716ZM34.4731 13.56V5.7H32.4731V13.56H34.4731ZM33.9313 6.58884L43.5913 1.60884L42.6749 -0.16884L33.0149 4.81116L33.9313 6.58884ZM43.1331 1.72H49.7331V-0.280001H43.1331V1.72ZM48.7331 0.719999V42H50.7331V0.719999H48.7331ZM49.7331 41H40.3731V43H49.7331V41Z" />
              </svg>
            </div>

            <h1 className="text-xl xl:text-5xl font-semibold xl:font-bold ">
              Architecure
            </h1>
            <p className="text-base font-normal mb-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              incidunt?
            </p>
            <Link href="/architecture">
              <button className="w-36 h-18 bg-[#B98E75] rounded-lg px-5 py-3 text-lg font-normal text-white">
                Get Service
              </button>
            </Link>
          </div>

          {/* Interior design card */}
          <div className=" fontDesign first-letter:box-border max-w-md border-2 px-7 py-5 border-[#B98E75] hover:bg-[#B98E75] hover:text-white service_design">
            <div className="flex justify-between items-center ">
              <Image src={images.service2} alt="bar" className="w-36"></Image>
              <svg
                width="62"
                height="43"
                viewBox="0 0 62 43"
                fill="#B98E75"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.38 40.8L4.87068 41.6606L4.87724 41.6645L4.88386 41.6682L5.38 40.8ZM1.6 34.98L0.61729 35.1651L0.618847 35.1734L0.620543 35.1817L1.6 34.98ZM1.6 7.8L0.619907 7.60114L0.617788 7.61222L1.6 7.8ZM5.38 1.98L5.87614 2.84824L5.88276 2.84446L5.88932 2.84057L5.38 1.98ZM25 1.98L24.4829 2.83591L24.4933 2.8422L24.5039 2.84824L25 1.98ZM28.72 7.74L27.7378 7.92777L27.7391 7.93472L27.7405 7.94165L28.72 7.74ZM28.72 34.98L27.7405 34.7783L27.7391 34.7853L27.7378 34.7922L28.72 34.98ZM25 40.8L25.5039 41.6638L25.5093 41.6606L25 40.8ZM18.82 34.2L18.2535 33.376L18.2409 33.3846L18.2286 33.3936L18.82 34.2ZM20.02 31.08L19.0247 30.9829L20.02 31.08ZM18.82 8.52L18.2286 9.3264L18.2409 9.33541L18.2535 9.34404L18.82 8.52ZM11.56 8.52L10.9935 7.69596L10.9809 7.70459L10.9686 7.71359L11.56 8.52ZM10.36 11.7L9.36701 11.5818L9.36576 11.5923L9.36473 11.6029L10.36 11.7ZM10.36 31.08L9.36451 31.1748L9.36576 31.188L9.36736 31.2011L10.36 31.08ZM11.56 34.2L10.9686 35.0064L10.9809 35.0154L10.9935 35.024L11.56 34.2ZM15.22 41.48C10.6481 41.48 7.59527 40.9141 5.87614 39.9318L4.88386 41.6682C7.08473 42.9259 10.5919 43.48 15.22 43.48V41.48ZM5.88932 39.9394C4.22402 38.9538 3.0961 37.2878 2.57946 34.7783L0.620543 35.1817C1.2239 38.1123 2.61598 40.3262 4.87068 41.6606L5.88932 39.9394ZM2.58271 34.7948C2.0814 32.1341 1.82 27.6752 1.82 21.36H-0.18C-0.18 27.6848 0.0785992 32.3059 0.61729 35.1651L2.58271 34.7948ZM1.82 21.36C1.82 15.0438 2.08153 10.6067 2.58221 7.98777L0.617788 7.61222C0.0784717 10.4333 -0.18 15.0362 -0.18 21.36H1.82ZM2.58003 7.99884C3.09805 5.44577 4.22627 3.79102 5.87614 2.84824L4.88386 1.11175C2.61373 2.40897 1.22195 4.63422 0.61997 7.60115L2.58003 7.99884ZM5.88932 2.84057C7.60405 1.82573 10.6505 1.24 15.22 1.24V-0.760002C10.5895 -0.760002 7.07595 -0.18574 4.87068 1.11942L5.88932 2.84057ZM15.22 1.24C19.7926 1.24 22.8126 1.8268 24.4829 2.83591L25.5171 1.12408C23.3474 -0.186802 19.8474 -0.760002 15.22 -0.760002V1.24ZM24.5039 2.84824C26.1536 3.79095 27.2591 5.42378 27.7378 7.92777L29.7022 7.55222C29.1409 4.61622 27.7664 2.40905 25.4961 1.11175L24.5039 2.84824ZM27.7405 7.94165C28.2782 10.5532 28.56 15.0038 28.56 21.36H30.56C30.56 14.9962 30.2818 10.3668 29.6995 7.53835L27.7405 7.94165ZM28.56 21.36C28.56 27.7162 28.2782 32.1668 27.7405 34.7783L29.6995 35.1817C30.2818 32.3532 30.56 27.7238 30.56 21.36H28.56ZM27.7378 34.7922C27.259 37.2967 26.1513 38.9566 24.4907 39.9394L25.5093 41.6606C27.7687 40.3234 29.141 38.1033 29.7022 35.1678L27.7378 34.7922ZM24.4961 39.9362C22.8215 40.9131 19.795 41.48 15.22 41.48V43.48C19.845 43.48 23.3385 42.9269 25.5039 41.6638L24.4961 39.9362ZM15.22 35.86C16.1549 35.86 16.9701 35.8033 17.6503 35.6786C18.3152 35.5567 18.9356 35.3553 19.4114 35.0064L18.2286 33.3936C18.1044 33.4847 17.8248 33.6133 17.2897 33.7114C16.7699 33.8067 16.0851 33.86 15.22 33.86V35.86ZM19.3865 35.024C19.9309 34.6498 20.291 34.079 20.5333 33.449C20.7771 32.8151 20.9303 32.0483 21.0153 31.1771L19.0247 30.9829C18.9497 31.7517 18.8229 32.3249 18.6667 32.731C18.509 33.141 18.3491 33.3102 18.2535 33.376L19.3865 35.024ZM21.0153 31.1771C21.1808 29.4808 21.26 26.1926 21.26 21.36H19.26C19.26 26.2074 19.1792 29.3992 19.0247 30.9829L21.0153 31.1771ZM21.26 21.36C21.26 16.5274 21.1808 13.2392 21.0153 11.5429L19.0247 11.7371C19.1792 13.3208 19.26 16.5126 19.26 21.36H21.26ZM21.0153 11.5429C20.9303 10.6717 20.7771 9.90487 20.5333 9.27102C20.291 8.64096 19.9309 8.07019 19.3865 7.69596L18.2535 9.34404C18.3491 9.40981 18.509 9.57904 18.6667 9.98898C18.8229 10.3951 18.9497 10.9683 19.0247 11.7371L21.0153 11.5429ZM19.4114 7.71359C18.9356 7.36472 18.3152 7.16328 17.6503 7.04139C16.9701 6.91668 16.1549 6.86 15.22 6.86V8.86C16.0851 8.86 16.7699 8.91332 17.2897 9.00861C17.8248 9.10672 18.1044 9.23528 18.2286 9.3264L19.4114 7.71359ZM15.22 6.86C14.2846 6.86 13.4658 6.91676 12.7775 7.04087C12.1018 7.16273 11.4794 7.36185 10.9935 7.69596L12.1265 9.34404C12.2806 9.23814 12.5882 9.10727 13.1325 9.00912C13.6642 8.91324 14.3554 8.86 15.22 8.86V6.86ZM10.9686 7.71359C10.4507 8.09344 10.1095 8.66884 9.8744 9.29194C9.63555 9.92489 9.47237 10.6968 9.36701 11.5818L11.353 11.8182C11.4476 11.0232 11.5845 10.4251 11.7456 9.99805C11.9105 9.56116 12.0693 9.38655 12.1514 9.3264L10.9686 7.71359ZM9.36473 11.6029C9.19925 13.299 9.12 16.5671 9.12 21.36H11.12C11.12 16.5529 11.2008 13.381 11.3553 11.7971L9.36473 11.6029ZM9.12 21.36C9.12 26.1539 9.19931 29.4403 9.36451 31.1748L11.3555 30.9852C11.2007 29.3597 11.12 26.1661 11.12 21.36H9.12ZM9.36736 31.2011C9.473 32.0674 9.63675 32.8252 9.87665 33.449C10.1134 34.0646 10.4552 34.6299 10.9686 35.0064L12.1514 33.3936C12.0648 33.3301 11.9066 33.1554 11.7433 32.731C11.5833 32.3148 11.447 31.7326 11.3526 30.9589L9.36736 31.2011ZM10.9935 35.024C11.4794 35.3581 12.1018 35.5573 12.7775 35.6791C13.4658 35.8032 14.2846 35.86 15.22 35.86V33.86C14.3554 33.86 13.6642 33.8068 13.1325 33.7109C12.5882 33.6127 12.2806 33.4819 12.1265 33.376L10.9935 35.024ZM44.2731 34.32H43.2731V35.32H44.2731V34.32ZM61.7331 34.32H62.7331V33.32H61.7331V34.32ZM61.7331 42V43H62.7331V42H61.7331ZM35.2131 42H34.2131V43H35.2131V42ZM35.5131 28.44L34.5223 28.3049L34.521 28.3147L34.5198 28.3245L35.5131 28.44ZM37.0131 24.12L36.1994 23.5388L36.1924 23.5485L36.1856 23.5585L37.0131 24.12ZM40.9731 21.18L41.3884 22.0897L41.3989 22.0848L40.9731 21.18ZM47.0931 18.3L46.6702 17.3938L46.6673 17.3952L47.0931 18.3ZM48.8931 17.46L48.4741 16.552L48.4702 16.5538L48.8931 17.46ZM51.1131 16.2L50.5131 15.4L50.4962 15.4127L50.4799 15.426L51.1131 16.2ZM52.0731 14.82L51.1244 14.5038L51.1176 14.5244L51.1116 14.5453L52.0731 14.82ZM50.0331 8.16L49.8015 9.1328L49.8237 9.13808L49.846 9.14234L50.0331 8.16ZM35.8731 8.58H34.8731V9.69959L35.9856 9.57365L35.8731 8.58ZM35.8731 1.44L35.686 0.457657L34.8731 0.612494V1.44H35.8731ZM41.9331 0.599997L41.8336 -0.395042L41.832 -0.394873L41.9331 0.599997ZM55.4931 1.02L55.2212 1.98232L55.2265 1.98381L55.4931 1.02ZM59.9931 4.32L59.1611 4.8747L59.1687 4.88619L59.1767 4.89746L59.9931 4.32ZM60.2331 19.62L59.3686 19.1174L59.3649 19.1239L60.2331 19.62ZM55.6731 23.52L55.2686 22.6054L55.2635 22.6077L55.6731 23.52ZM46.8531 27.48L47.247 28.3991L47.2549 28.3958L47.2627 28.3923L46.8531 27.48ZM45.5331 28.14L46.0631 28.988L45.5331 28.14ZM44.8131 28.92L45.6706 29.4345L45.6904 29.4016L45.7076 29.3672L44.8131 28.92ZM44.3331 30.48L43.3408 30.356L43.3373 30.3846L43.3353 30.4135L44.3331 30.48ZM44.2731 35.32H61.7331V33.32H44.2731V35.32ZM60.7331 34.32V42H62.7331V34.32H60.7331ZM61.7331 41H35.2131V43H61.7331V41ZM36.2131 42V36.48H34.2131V42H36.2131ZM36.2131 36.48C36.2131 32.8462 36.3135 30.2147 36.5064 28.5555L34.5198 28.3245C34.3127 30.1053 34.2131 32.8338 34.2131 36.48H36.2131ZM36.504 28.5751C36.7294 26.9221 37.1899 25.6404 37.8406 24.6815L36.1856 23.5585C35.3163 24.8396 34.7769 26.4379 34.5223 28.3049L36.504 28.5751ZM37.8269 24.7012C38.4882 23.7753 39.6379 22.8888 41.3884 22.0897L40.5578 20.2703C38.6283 21.1512 37.138 22.2247 36.1994 23.5388L37.8269 24.7012ZM41.3989 22.0848L47.5189 19.2048L46.6673 17.3952L40.5473 20.2752L41.3989 22.0848ZM47.516 19.2062L49.316 18.3662L48.4702 16.5538L46.6702 17.3938L47.516 19.2062ZM49.3122 18.368C50.3679 17.8807 51.2039 17.4178 51.7464 16.974L50.4799 15.426C50.1424 15.7022 49.4984 16.0793 48.4741 16.552L49.3122 18.368ZM51.7131 17C52.3621 16.5133 52.8128 15.8713 53.0346 15.0947L51.1116 14.5453C51.0135 14.8887 50.8242 15.1667 50.5131 15.4L51.7131 17ZM53.0218 15.1362C53.2715 14.3871 53.3731 13.4228 53.3731 12.3H51.3731C51.3731 13.3372 51.2747 14.0529 51.1244 14.5038L53.0218 15.1362ZM53.3731 12.3C53.3731 10.8672 53.1985 9.63189 52.6906 8.7855L50.9756 9.8145C51.1878 10.1681 51.3731 10.9328 51.3731 12.3H53.3731ZM52.6906 8.7855C52.1521 7.88795 51.2728 7.37814 50.2202 7.17766L49.846 9.14234C50.4735 9.26186 50.7942 9.51205 50.9756 9.8145L52.6906 8.7855ZM50.2647 7.18719C49.3026 6.95811 47.842 6.86 45.9531 6.86V8.86C47.8243 8.86 49.0836 8.96188 49.8015 9.1328L50.2647 7.18719ZM45.9531 6.86C43.4182 6.86 40.0155 7.10466 35.7606 7.58635L35.9856 9.57365C40.2107 9.09534 43.528 8.86 45.9531 8.86V6.86ZM36.8731 8.58V1.44H34.8731V8.58H36.8731ZM36.0602 2.42233C37.7033 2.10937 39.693 1.83297 42.0343 1.59487L41.832 -0.394873C39.4533 -0.152969 37.403 0.130623 35.686 0.457657L36.0602 2.42233ZM42.0326 1.59503C44.406 1.35769 46.5723 1.24 48.5331 1.24V-0.760002C46.494 -0.760002 44.2602 -0.637699 41.8336 -0.395041L42.0326 1.59503ZM48.5331 1.24C51.2796 1.24 53.5003 1.49597 55.2212 1.98231L55.7651 0.0576897C53.806 -0.495975 51.3866 -0.760002 48.5331 -0.760002V1.24ZM55.2265 1.98381C56.8663 2.43736 58.1692 3.38688 59.1611 4.8747L60.8252 3.7653C59.5771 1.89312 57.88 0.642637 55.7597 0.0561867L55.2265 1.98381ZM59.1767 4.89746C60.1631 6.29201 60.7331 8.50745 60.7331 11.7H62.7331C62.7331 8.33255 62.1432 5.62799 60.8095 3.74253L59.1767 4.89746ZM60.7331 11.7C60.7331 15.2033 60.2345 17.628 59.3686 19.1174L61.0976 20.1226C62.2317 18.172 62.7331 15.3167 62.7331 11.7H60.7331ZM59.3649 19.1239C58.5285 20.5875 57.1887 21.7562 55.2686 22.6055L56.0776 24.4345C58.3175 23.4438 60.0177 22.0125 61.1014 20.1161L59.3649 19.1239ZM55.2635 22.6077L46.4435 26.5677L47.2627 28.3923L56.0827 24.4323L55.2635 22.6077ZM46.4592 26.5609C45.8769 26.8104 45.3847 27.0535 45.0031 27.292L46.0631 28.988C46.3215 28.8265 46.7093 28.6296 47.247 28.3991L46.4592 26.5609ZM45.0031 27.292C44.536 27.5839 44.1656 27.979 43.9187 28.4728L45.7076 29.3672C45.7807 29.221 45.8902 29.0961 46.0631 28.988L45.0031 27.292ZM43.9556 28.4055C43.6222 28.9613 43.4319 29.6273 43.3408 30.356L45.3254 30.604C45.3943 30.0527 45.5241 29.6787 45.6706 29.4345L43.9556 28.4055ZM43.3353 30.4135C43.293 31.0483 43.2731 31.9959 43.2731 33.24H45.2731C45.2731 32.0041 45.2932 31.1117 45.3309 30.5465L43.3353 30.4135ZM43.2731 33.24V34.32H45.2731V33.24H43.2731Z" />
              </svg>
            </div>

            <h1 className="text-xl xl:text-5xl font-semibold xl:font-bold">
              Interior Design
            </h1>
            <p className="text-base font-normal mb-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              incidunt?
            </p>
            <Link href="/architecture">
              <button className="w-36 h-18 bg-[#B98E75] rounded-lg px-5 py-3 text-lg font-normal text-white">
                Get Service
              </button>
            </Link>
          </div>

          {/* Home decor card */}
          <div className=" fontDesign box-border max-w-md border-2 px-7 py-5 border-[#B98E75] hover:bg-[#B98E75] hover:text-white  service_design">
            <div className="flex justify-between items-center">
              <Image src={images.service3} alt="bar" className="w-36 "></Image>
              <svg
                width="62"
                height="43"
                viewBox="0 0 62 43"
                fill="#B98E75"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.38 40.8L4.87068 41.6606L4.87724 41.6645L4.88386 41.6682L5.38 40.8ZM1.6 34.98L0.61729 35.1651L0.618847 35.1734L0.620543 35.1817L1.6 34.98ZM1.6 7.8L0.619907 7.60114L0.617788 7.61222L1.6 7.8ZM5.38 1.98L5.87614 2.84824L5.88276 2.84446L5.88932 2.84057L5.38 1.98ZM25 1.98L24.4829 2.83591L24.4933 2.8422L24.5039 2.84824L25 1.98ZM28.72 7.74L27.7378 7.92777L27.7391 7.93472L27.7405 7.94165L28.72 7.74ZM28.72 34.98L27.7405 34.7783L27.7391 34.7853L27.7378 34.7922L28.72 34.98ZM25 40.8L25.5039 41.6638L25.5093 41.6606L25 40.8ZM18.82 34.2L18.2535 33.376L18.2409 33.3846L18.2286 33.3936L18.82 34.2ZM20.02 31.08L19.0247 30.9829L20.02 31.08ZM18.82 8.52L18.2286 9.3264L18.2409 9.33541L18.2535 9.34404L18.82 8.52ZM11.56 8.52L10.9935 7.69596L10.9809 7.70459L10.9686 7.71359L11.56 8.52ZM10.36 11.7L9.36701 11.5818L9.36576 11.5923L9.36473 11.6029L10.36 11.7ZM10.36 31.08L9.36451 31.1748L9.36576 31.188L9.36736 31.2011L10.36 31.08ZM11.56 34.2L10.9686 35.0064L10.9809 35.0154L10.9935 35.024L11.56 34.2ZM15.22 41.48C10.6481 41.48 7.59527 40.9141 5.87614 39.9318L4.88386 41.6682C7.08473 42.9259 10.5919 43.48 15.22 43.48V41.48ZM5.88932 39.9394C4.22402 38.9538 3.0961 37.2878 2.57946 34.7783L0.620543 35.1817C1.2239 38.1123 2.61598 40.3262 4.87068 41.6606L5.88932 39.9394ZM2.58271 34.7948C2.0814 32.1341 1.82 27.6752 1.82 21.36H-0.18C-0.18 27.6848 0.0785992 32.3059 0.61729 35.1651L2.58271 34.7948ZM1.82 21.36C1.82 15.0438 2.08153 10.6067 2.58221 7.98777L0.617788 7.61222C0.0784717 10.4333 -0.18 15.0362 -0.18 21.36H1.82ZM2.58003 7.99884C3.09805 5.44577 4.22627 3.79102 5.87614 2.84824L4.88386 1.11175C2.61373 2.40897 1.22195 4.63422 0.61997 7.60115L2.58003 7.99884ZM5.88932 2.84057C7.60405 1.82573 10.6505 1.24 15.22 1.24V-0.760002C10.5895 -0.760002 7.07595 -0.18574 4.87068 1.11942L5.88932 2.84057ZM15.22 1.24C19.7926 1.24 22.8126 1.8268 24.4829 2.83591L25.5171 1.12408C23.3474 -0.186802 19.8474 -0.760002 15.22 -0.760002V1.24ZM24.5039 2.84824C26.1536 3.79095 27.2591 5.42378 27.7378 7.92777L29.7022 7.55222C29.1409 4.61622 27.7664 2.40905 25.4961 1.11175L24.5039 2.84824ZM27.7405 7.94165C28.2782 10.5532 28.56 15.0038 28.56 21.36H30.56C30.56 14.9962 30.2818 10.3668 29.6995 7.53835L27.7405 7.94165ZM28.56 21.36C28.56 27.7162 28.2782 32.1668 27.7405 34.7783L29.6995 35.1817C30.2818 32.3532 30.56 27.7238 30.56 21.36H28.56ZM27.7378 34.7922C27.259 37.2967 26.1513 38.9566 24.4907 39.9394L25.5093 41.6606C27.7687 40.3234 29.141 38.1033 29.7022 35.1678L27.7378 34.7922ZM24.4961 39.9362C22.8215 40.9131 19.795 41.48 15.22 41.48V43.48C19.845 43.48 23.3385 42.9269 25.5039 41.6638L24.4961 39.9362ZM15.22 35.86C16.1549 35.86 16.9701 35.8033 17.6503 35.6786C18.3152 35.5567 18.9356 35.3553 19.4114 35.0064L18.2286 33.3936C18.1044 33.4847 17.8248 33.6133 17.2897 33.7114C16.7699 33.8067 16.0851 33.86 15.22 33.86V35.86ZM19.3865 35.024C19.9309 34.6498 20.291 34.079 20.5333 33.449C20.7771 32.8151 20.9303 32.0483 21.0153 31.1771L19.0247 30.9829C18.9497 31.7517 18.8229 32.3249 18.6667 32.731C18.509 33.141 18.3491 33.3102 18.2535 33.376L19.3865 35.024ZM21.0153 31.1771C21.1808 29.4808 21.26 26.1926 21.26 21.36H19.26C19.26 26.2074 19.1792 29.3992 19.0247 30.9829L21.0153 31.1771ZM21.26 21.36C21.26 16.5274 21.1808 13.2392 21.0153 11.5429L19.0247 11.7371C19.1792 13.3208 19.26 16.5126 19.26 21.36H21.26ZM21.0153 11.5429C20.9303 10.6717 20.7771 9.90487 20.5333 9.27102C20.291 8.64096 19.9309 8.07019 19.3865 7.69596L18.2535 9.34404C18.3491 9.40981 18.509 9.57904 18.6667 9.98898C18.8229 10.3951 18.9497 10.9683 19.0247 11.7371L21.0153 11.5429ZM19.4114 7.71359C18.9356 7.36472 18.3152 7.16328 17.6503 7.04139C16.9701 6.91668 16.1549 6.86 15.22 6.86V8.86C16.0851 8.86 16.7699 8.91332 17.2897 9.00861C17.8248 9.10672 18.1044 9.23528 18.2286 9.3264L19.4114 7.71359ZM15.22 6.86C14.2846 6.86 13.4658 6.91676 12.7775 7.04087C12.1018 7.16273 11.4794 7.36185 10.9935 7.69596L12.1265 9.34404C12.2806 9.23814 12.5882 9.10727 13.1325 9.00912C13.6642 8.91324 14.3554 8.86 15.22 8.86V6.86ZM10.9686 7.71359C10.4507 8.09344 10.1095 8.66884 9.8744 9.29194C9.63555 9.92489 9.47237 10.6968 9.36701 11.5818L11.353 11.8182C11.4476 11.0232 11.5845 10.4251 11.7456 9.99805C11.9105 9.56116 12.0693 9.38655 12.1514 9.3264L10.9686 7.71359ZM9.36473 11.6029C9.19925 13.299 9.12 16.5671 9.12 21.36H11.12C11.12 16.5529 11.2008 13.381 11.3553 11.7971L9.36473 11.6029ZM9.12 21.36C9.12 26.1539 9.19931 29.4403 9.36451 31.1748L11.3555 30.9852C11.2007 29.3597 11.12 26.1661 11.12 21.36H9.12ZM9.36736 31.2011C9.473 32.0674 9.63675 32.8252 9.87665 33.449C10.1134 34.0646 10.4552 34.6299 10.9686 35.0064L12.1514 33.3936C12.0648 33.3301 11.9066 33.1554 11.7433 32.731C11.5833 32.3148 11.447 31.7326 11.3526 30.9589L9.36736 31.2011ZM10.9935 35.024C11.4794 35.3581 12.1018 35.5573 12.7775 35.6791C13.4658 35.8032 14.2846 35.86 15.22 35.86V33.86C14.3554 33.86 13.6642 33.8068 13.1325 33.7109C12.5882 33.6127 12.2806 33.4819 12.1265 33.376L10.9935 35.024ZM40.6131 42.12L40.7197 41.1257L40.6131 42.12ZM34.7331 41.28H33.7331V42.1075L34.546 42.2623L34.7331 41.28ZM34.7331 34.26L34.8326 33.265L33.7331 33.155V34.26H34.7331ZM49.3131 34.62L49.492 35.6039L49.5135 35.6L49.5347 35.5951L49.3131 34.62ZM51.2331 33.36L52.0811 33.89L52.0882 33.8786L52.0951 33.867L51.2331 33.36ZM51.3531 26.76L50.4211 27.1224L50.4297 27.1445L50.4393 27.1661L51.3531 26.76ZM49.8531 25.32L49.4724 26.2447L49.5042 26.2578L49.5369 26.2687L49.8531 25.32ZM40.4931 24.9H39.4931V25.9H40.4931V24.9ZM40.4931 17.4V16.4H39.4931V17.4H40.4931ZM49.6131 17.1L49.9114 18.0545L49.9381 18.0461L49.9642 18.0363L49.6131 17.1ZM50.9931 15.72L50.0883 15.2942L50.0778 15.3165L50.0684 15.3392L50.9931 15.72ZM50.9331 9.42L50.0493 9.88789L50.0553 9.89915L50.0616 9.91026L50.9331 9.42ZM49.0731 8.16L48.8515 9.13513L48.8728 9.13997L48.8942 9.14387L49.0731 8.16ZM34.9131 8.52H33.9131V9.65278L35.0372 9.51228L34.9131 8.52ZM34.9131 1.44L34.6936 0.464386L33.9131 0.639997V1.44H34.9131ZM40.6131 0.599997L40.7037 1.59589L40.7126 1.59508L40.7216 1.5941L40.6131 0.599997ZM54.9531 1.38L54.604 2.3171L54.6099 2.31926L54.9531 1.38ZM59.4531 4.86L58.5918 5.36798V5.36798L59.4531 4.86ZM59.2731 17.76L58.4411 17.2053L58.4377 17.2104L59.2731 17.76ZM54.5331 20.82L54.2991 19.8478L53.5331 20.0322V20.82H54.5331ZM54.5331 21.06H53.5331V21.8441L54.2946 22.0311L54.5331 21.06ZM59.5731 24.06L60.3731 23.46L59.5731 24.06ZM59.9331 37.44L60.8232 37.8959V37.8959L59.9331 37.44ZM55.4331 41.22L55.8015 42.1497L55.8104 42.1461L55.4331 41.22ZM46.5531 41.48C44.8776 41.48 42.9344 41.363 40.7197 41.1257L40.5066 43.1143C42.7718 43.357 44.7886 43.48 46.5531 43.48V41.48ZM40.7197 41.1257C38.4988 40.8877 36.5667 40.6113 34.9202 40.2977L34.546 42.2623C36.2595 42.5887 38.2475 42.8723 40.5066 43.1143L40.7197 41.1257ZM35.7331 41.28V34.26H33.7331V41.28H35.7331ZM34.6336 35.255C38.6559 35.6573 42.1706 35.86 45.1731 35.86V33.86C42.2557 33.86 38.8104 33.6627 34.8326 33.265L34.6336 35.255ZM45.1731 35.86C47.0626 35.86 48.5183 35.7809 49.492 35.6039L49.1342 33.6361C48.3479 33.7791 47.0436 33.86 45.1731 33.86V35.86ZM49.5347 35.5951C50.62 35.3485 51.5128 34.7993 52.0811 33.89L50.3851 32.83C50.1534 33.2007 49.7663 33.4915 49.0915 33.6449L49.5347 35.5951ZM52.0951 33.867C52.6361 32.9472 52.8331 31.6208 52.8331 30.06H50.8331C50.8331 31.5392 50.6301 32.4128 50.3712 32.853L52.0951 33.867ZM52.8331 30.06C52.8331 28.5416 52.6741 27.2699 52.2669 26.3539L50.4393 27.1661C50.6722 27.6901 50.8331 28.6184 50.8331 30.06H52.8331ZM52.2851 26.3976C51.8995 25.406 51.1774 24.7073 50.1694 24.3713L49.5369 26.2687C49.9689 26.4127 50.2467 26.674 50.4211 27.1224L52.2851 26.3976ZM50.2339 24.3953C49.3701 24.0397 48.1918 23.9 46.7931 23.9V25.9C48.1144 25.9 48.9761 26.0403 49.4724 26.2447L50.2339 24.3953ZM46.7931 23.9H40.4931V25.9H46.7931V23.9ZM41.4931 24.9V17.4H39.4931V24.9H41.4931ZM40.4931 18.4H46.7931V16.4H40.4931V18.4ZM46.7931 18.4C48.0639 18.4 49.1251 18.3002 49.9114 18.0545L49.3148 16.1455C48.8212 16.2998 48.0024 16.4 46.7931 16.4V18.4ZM49.9642 18.0363C50.8856 17.6908 51.541 17.0158 51.9178 16.1007L50.0684 15.3392C49.8852 15.7842 49.6207 16.0292 49.262 16.1637L49.9642 18.0363ZM51.8979 16.1458C52.3138 15.262 52.4731 14.0415 52.4731 12.6H50.4731C50.4731 13.9585 50.3124 14.818 50.0883 15.2942L51.8979 16.1458ZM52.4731 12.6C52.4731 11.0897 52.2983 9.80724 51.8047 8.92974L50.0616 9.91026C50.288 10.3128 50.4731 11.1503 50.4731 12.6H52.4731ZM51.8169 8.95211C51.2891 7.95519 50.3785 7.38094 49.252 7.17613L48.8942 9.14387C49.5278 9.25906 49.8571 9.52481 50.0493 9.88789L51.8169 8.95211ZM49.2947 7.18487C48.2971 6.95812 46.7601 6.86 44.7531 6.86V8.86C46.7462 8.86 48.0892 8.96188 48.8515 9.13513L49.2947 7.18487ZM44.7531 6.86C41.6655 6.86 38.3436 7.0834 34.7891 7.52772L35.0372 9.51228C38.5226 9.0766 41.7607 8.86 44.7531 8.86V6.86ZM35.9131 8.52V1.44H33.9131V8.52H35.9131ZM35.1326 2.41561C36.6785 2.0678 38.5332 1.7932 40.7037 1.59589L40.5226 -0.395897C38.293 -0.193209 36.3478 0.0921955 34.6936 0.464386L35.1326 2.41561ZM40.7216 1.5941C42.8934 1.35718 44.8564 1.24 46.6131 1.24V-0.760002C44.7698 -0.760002 42.7329 -0.637182 40.5047 -0.394106L40.7216 1.5941ZM46.6131 1.24C50.0782 1.24 52.7232 1.6164 54.604 2.31708L55.3022 0.442915C53.103 -0.376406 50.188 -0.760002 46.6131 -0.760002V1.24ZM54.6099 2.31926C56.5226 3.01811 57.8139 4.04894 58.5918 5.36798L60.3145 4.35201C59.2524 2.55106 57.5437 1.26188 55.2963 0.440733L54.6099 2.31926ZM58.5918 5.36798C59.391 6.72324 59.8331 8.58859 59.8331 11.04H61.8331C61.8331 8.37141 61.3552 6.11676 60.3145 4.35201L58.5918 5.36798ZM59.8331 11.04C59.8331 13.8643 59.3262 15.8776 58.4411 17.2053L60.1052 18.3147C61.3 16.5224 61.8331 14.0557 61.8331 11.04H59.8331ZM58.4377 17.2104C57.6067 18.4735 56.2697 19.3734 54.2991 19.8478L54.7672 21.7922C57.1165 21.2266 58.9396 20.0864 60.1085 18.3096L58.4377 17.2104ZM53.5331 20.82V21.06H55.5331V20.82H53.5331ZM54.2946 22.0311C56.4193 22.553 57.8692 23.4547 58.7731 24.66L60.3731 23.46C59.1171 21.7853 57.207 20.687 54.7717 20.0889L54.2946 22.0311ZM58.7731 24.66C59.6559 25.837 60.1931 27.8875 60.1931 31.02H62.1931C62.1931 27.7525 61.6504 25.163 60.3731 23.46L58.7731 24.66ZM60.1931 31.02C60.1931 33.5655 59.7864 35.5329 59.0431 36.9841L60.8232 37.8959C61.7599 36.0671 62.1931 33.7545 62.1931 31.02H60.1931ZM59.0431 36.9841C58.3387 38.3593 57.0548 39.4795 55.0558 40.2939L55.8104 42.1461C58.1315 41.2005 59.8475 39.8008 60.8232 37.8959L59.0431 36.9841ZM55.0648 40.2903C53.1146 41.063 50.2998 41.48 46.5531 41.48V43.48C50.4065 43.48 53.5116 43.057 55.8015 42.1497L55.0648 40.2903Z" />
              </svg>
            </div>

            <h1 className="text-xl xl:text-5xl font-semibold xl:font-bold">
              Home Decor
            </h1>
            <p className="text-base font-normal mb-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              incidunt?
            </p>
            <Link href="/architecture">
              <button className="w-36 h-18 bg-[#B98E75] rounded-lg px-5 py-3 text-lg font-normal text-white">
                Get Service
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
