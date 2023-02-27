import { FunctionComponent, useEffect } from "react";
import AlphaCapTreasury from "../components/AlphaCapTreasury";
import FrameComponent from "../components/FrameComponent";
import RectangleComponent1 from "../components/RectangleComponent1";
import RectangleIcon from "../components/RectangleIcon";
import RectangleComponent from "../components/RectangleComponent";

const HomeOption3: FunctionComponent = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className="relative bg-gray-100 w-full h-[4974px] overflow-hidden text-left text-xs text-headings font-header">
      <div className="absolute top-[4414px] left-[-3px] w-[1443px] h-[543px] flex flex-col items-center justify-start text-base text-darkgray-100 font-poppins">
        <div className="relative w-[1440px] h-[543px] shrink-0">
          <div className="absolute top-[0px] left-[0px] bg-darkslategray-300 w-[1440px] h-[543px]" />
          <div className="absolute top-[509px] left-[616px] text-3xs leading-[148.52%]">
            Copyright @ 2022. All Rights Reserved.
          </div>
          <b className="absolute top-[171px] left-[1171px] text-4xl leading-[148.52%] font-header text-whitesmoke-200">
            Other Links
          </b>
          <div className="absolute top-[247px] left-[1171px] leading-[148.52%]">{`Terms & Condition`}</div>
          <div className="absolute top-[281px] left-[1171px] leading-[148.52%]">
            Privacy Policy
          </div>
          <div className="absolute top-[315px] left-[1171px] leading-[148.52%]">
            Report Abuse
          </div>
          <div className="absolute top-[349px] left-[1171px] leading-[148.52%]">
            Contact Us
          </div>
          <b className="absolute top-[171px] left-[759px] text-4xl leading-[148.52%] font-header text-whitesmoke-200">
            Serives
          </b>
          <div className="absolute top-[247px] left-[759px] leading-[148.52%]">
            Application Development
          </div>
          <div className="absolute top-[281px] left-[759px] leading-[148.52%]">
            Human-to-Machine Communication
          </div>
          <div className="absolute top-[315px] left-[759px] leading-[148.52%]">
            Machine-to-Machine Communication
          </div>
          <div className="absolute top-[349px] left-[759px] leading-[148.52%]">
            Video Analytics
          </div>
          <div className="absolute top-[171px] left-[121px] w-[182px] h-[36.1px]" />
          <img
            className="absolute top-[400.49px] left-[134.95px] w-[178.05px] h-[33.26px]"
            alt=""
            src="/group-2154.svg"
          />
          <img
            className="absolute top-[164.25px] left-[134.95px] w-[99px] h-[76px] overflow-hidden"
            alt=""
            src="/frame5.svg"
          />
          <div className="absolute top-[274.63px] left-[134.95px] text-xs leading-[163%] font-header inline-block w-[251.05px]">
            We specialize in developing custom applications that streamline
            processes and improve efficiency for businesses of all sizes.
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[42px] text-2xl text-whitesmoke-200 font-header">
          <b className="relative">CONTACT US</b>
          <div className="flex flex-col items-start justify-start gap-[22px] text-sm text-darkgray-100 font-inter">
            <div className="flex flex-row items-end justify-start gap-[15px]">
              <img className="relative w-[13px] h-[17px] shrink-0" alt="" />
              <div className="relative">+44-(0)-1474-338-718</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[12px]">
              <img className="relative w-[18px] h-3.5 shrink-0" alt="" />
              <div className="relative">info@cogai.uk</div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[16px]">
              <img
                className="relative w-[10.13px] h-[15.94px] shrink-0"
                alt=""
              />
              <div className="relative">
                <p className="[margin-block-start:0] [margin-block-end:0px]">{`Cogai LTD, 6 Station View, `}</p>
                <p className="[margin-block-start:0] [margin-block-end:0px]">{`Hazel Grove, Stockport, `}</p>
                <p className="m-0">England, SK7 5ER</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[13px]">
              <img className="relative w-4 h-4 shrink-0" alt="" />
              <div className="relative">Monday To Friday</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[2267.08px] left-[0px] bg-primary-green w-[1440px] h-[575.82px] opacity-[0.25]" />
      <img
        className="absolute top-[1691.96px] left-[0px] w-[1621.04px] h-[1252.55px]"
        alt=""
        src="/group-258.svg"
      />
      <div className="absolute top-[2842.9px] left-[0px] bg-gray-100 w-[1440px] h-[167.23px]" />
      <div className="absolute top-[-727px] left-[874px] w-[1522px] h-[570px] flex flex-row items-center justify-start">
        <img
          className="relative w-[743.5px] h-[857.75px] shrink-0 opacity-[0.09]"
          alt=""
        />
      </div>
      <div className="absolute top-[853px] left-[333.48px] w-[773.04px] h-[127.24px] text-base">
        <div className="absolute top-[0px] left-[0px] rounded-base bg-white box-border w-[773.04px] h-[127.24px] border-[1px] border-solid border-gainsboro-100" />
        <div className="absolute top-[23.17px] left-[59.52px] flex flex-row items-center justify-start gap-[76px]">
          <div className="relative w-32 h-[80.9px] shrink-0">
            <div className="absolute top-[54.9px] left-[0px] leading-[163%] font-medium">
              Future Concept
            </div>
            <img
              className="absolute h-[51.92%] w-[32.81%] top-[0%] right-[33.59%] bottom-[48.08%] left-[33.59%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector12.svg"
            />
          </div>
          <div className="relative w-0 h-[62.67px] shrink-0" />
          <div className="relative w-[75px] h-[80.9px] shrink-0">
            <div className="absolute top-[54.9px] left-[0px] leading-[163%] font-medium">
              Big Ideas
            </div>
            <img
              className="absolute h-[52.41%] w-[56.53%] top-[0%] right-[21.73%] bottom-[47.59%] left-[21.73%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector13.svg"
            />
          </div>
          <div className="relative w-0 h-[62.67px] shrink-0" />
          <div className="relative w-[147px] h-[73.9px] shrink-0">
            <div className="absolute top-[47.9px] left-[0px] leading-[163%] font-medium">
              Creative Solutions
            </div>
            <img
              className="absolute h-[56.83%] w-[18.76%] top-[0%] right-[40.62%] bottom-[43.17%] left-[40.62%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector14.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[4230px] left-[345px] rounded-base bg-white shadow-[-7px_-7px_72px_rgba(0,_0,_0,_0.13)] flex flex-col py-[45px] px-[125px] items-center justify-center text-center text-base text-black">
        <div className="relative w-[501px] h-[200px] shrink-0">
          <div className="absolute top-[0px] left-[30.5px] text-7xl font-semibold text-left">
            Get News And Updates!
          </div>
          <div className="absolute top-[59px] left-[49.5px] leading-[172%] font-medium text-color inline-block w-[402px] h-[60px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <div className="absolute top-[139px] left-[0px] w-[501px] h-[61px] text-white">
            <div className="absolute top-[0px] left-[0px] rounded-md bg-whitesmoke-100 box-border w-[501px] h-[61px] border-[1px] border-solid border-gainsboro-100" />
            <div className="absolute top-[6px] left-[342px] rounded-md bg-black w-[153px] h-[49px]" />
            <div className="absolute top-[17px] left-[378px] leading-[139.78%] font-medium">
              Subscribe
            </div>
            <div className="absolute top-[14px] left-[20px] w-[153px] h-[34px] text-2xl text-darkslategray-100 font-poppins">
              <div className="absolute top-[0px] left-[0px] leading-[172%] font-medium">
                @
              </div>
              <div className="absolute top-[5px] left-[24px] text-xs leading-[172%] font-medium font-header text-silver">
                Enter Your Email...
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[2390.27px] left-[832px] bg-white shadow-[0px_5px_25px_rgba(0,_0,_0,_0.25)] w-[456.06px] h-[619.86px]" />
      <div className="absolute top-[2390.27px] left-[832px] bg-primary-green w-[456.06px] h-[9.41px]" />
      <div className="absolute top-[2429.01px] left-[872.61px] leading-[163%] font-medium">
        Get in Touch
      </div>
      <div className="absolute top-[2450.76px] left-[872.61px] text-2xl leading-[163%] font-semibold text-primary-green">
        Please Fill The Form
      </div>
      <div className="absolute top-[2504.09px] left-[872.61px] rounded-md box-border w-[373.63px] h-[43.55px] opacity-[0.24] border-[1px] border-solid border-text" />
      <div className="absolute top-[2562.23px] left-[872.61px] rounded-md box-border w-[373.63px] h-[43.55px] opacity-[0.24] border-[1px] border-solid border-text" />
      <div className="absolute top-[2794.8px] left-[872.61px] rounded-md box-border w-[373.63px] h-[106.19px] opacity-[0.24] border-[1px] border-solid border-text" />
      <img
        className="absolute top-[2620.37px] left-[872.61px] rounded-md w-[373.63px] h-[43.55px] opacity-[0.24]"
        alt=""
        src="/rectangle-121.svg"
      />
      <div className="absolute top-[2678.51px] left-[872.61px] rounded-md box-border w-[373.63px] h-[43.55px] opacity-[0.24] border-[1px] border-solid border-text" />
      <div className="absolute top-[2736.66px] left-[871.57px] rounded-md box-border w-[373.63px] h-[43.55px] opacity-[0.24] border-[1px] border-solid border-text" />
      <div className="absolute top-[2513.36px] left-[891.27px] leading-[163%] text-text inline-block w-[46.75px] h-[25.01px]">
        Name
      </div>
      <div className="absolute top-[2571.5px] left-[891.27px] leading-[163%] text-text inline-block w-[43.49px] h-[25.01px]">
        Email
      </div>
      <div className="absolute top-[2629.64px] left-[891.27px] leading-[163%] text-text inline-block w-[73.93px] h-[25.01px]">
        Company
      </div>
      <div className="absolute top-[2687.78px] left-[891.27px] leading-[163%] text-text">
        Company Size
      </div>
      <div className="absolute top-[2745.93px] left-[890.41px] leading-[163%] text-text inline-block w-[133.74px] h-[25.01px]">
        Choose Service(s)
      </div>
      <div className="absolute top-[2805.29px] left-[890.41px] leading-[163%] text-text">
        Add Comment (optional)
      </div>
      <img
        className="absolute top-[2755.36px] left-[1219.32px] w-[10.34px] h-[6.56px]"
        alt=""
        src="/polygon-21.svg"
      />
      <img
        className="absolute top-[2697.22px] left-[1219.32px] w-[10.34px] h-[6.56px]"
        alt=""
        src="/polygon-32.svg"
      />
      <div className="absolute top-[2923.22px] left-[871.57px] rounded-md bg-primary-green w-[374.67px] h-[52.81px]" />
      <div className="absolute top-[2935.13px] left-[1024.9px] text-lg leading-[163%] font-medium text-white">
        Submit
      </div>
      <div className="absolute top-[2404.98px] left-[119px] box-border w-[74px] h-0.5 border-t-[2px] border-solid border-primary-green" />
      <div className="absolute top-[1537.39px] left-[175px] flex flex-row items-center justify-center gap-[128px] text-center text-10xl text-primary-green">
        <div className="relative w-[197px] h-[98.87px] shrink-0">
          <div className="absolute top-[calc(50%_-_49.43px)] left-[25.89%] font-semibold">
            95%
          </div>
          <div className="absolute top-[calc(50%_+_20.43px)] left-[0%] text-4xl text-gray-500 text-left">
            Client Retention
          </div>
        </div>
        <img
          className="relative w-[3px] h-[102.69px] shrink-0"
          alt=""
          src="/line-2.svg"
        />
        <div className="relative w-[186px] h-[99.48px] shrink-0">
          <div className="absolute top-[calc(50%_-_49.74px)] left-[37.9%] font-semibold">
            15
          </div>
          <div className="absolute top-[calc(50%_+_20.74px)] left-[0%] text-4xl text-gray-500 text-left">
            Years of Service
          </div>
        </div>
        <img
          className="relative w-[3px] h-[102.69px] shrink-0"
          alt=""
          src="/line-2.svg"
        />
        <div className="relative w-[193px] h-[82.62px] shrink-0">
          <div className="absolute top-[calc(50%_-_41.31px)] left-[11.92%] font-semibold">
            2000+
          </div>
          <div className="absolute top-[calc(50%_+_41.31px)] left-[0%] text-4xl text-gray-500">
            Satisfied Clients
          </div>
        </div>
      </div>
      <div className="absolute top-[1846.24px] left-[823.5px] text-base font-semibold text-white">{`WE ARE LEADING TECH COMPANY `}</div>
      <b className="absolute top-[1798.24px] left-[911.5px] text-6xl text-primary-green">
        Why Choose Us
      </b>
      <div className="absolute top-[1817.24px] left-[821.5px] box-border w-[74px] h-0.5 border-t-[2px] border-solid border-primary-green" />
      <div className="absolute top-[1971.56px] left-[823.5px] w-[331px] h-[134px] text-lg text-primary-green">
        <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[6px]">
          <div className="relative leading-[163%] font-semibold">
            <span className="tracking-[-0.13em]">--</span>
            <span className="text-white"> Professional Team</span>
          </div>
          <div className="relative leading-[163%] font-semibold">
            <span className="tracking-[-0.12em]">--</span>
            <span className="text-white"> Dedicated IT Solution</span>
          </div>
          <div className="relative leading-[163%] font-semibold">
            <span>
              <span className="tracking-[-0.13em]">--</span>
            </span>
            <span>{`    `}</span>
            <span className="text-white">24/7 Support</span>
          </div>
          <div className="relative leading-[163%] font-semibold">
            <span className="tracking-[-0.13em]">--</span>
            <span className="text-white">{`    Experienced & Skilled Resources`}</span>
          </div>
        </div>
      </div>
      <div className="absolute top-[1900.9px] left-[823.5px] text-base leading-[163%] font-medium text-white inline-block w-[449.34px]">
        We specialize in providing services to help businesses transform and
        thrive in the digital age.
      </div>
      <img
        className="absolute top-[1691.96px] left-[0px] w-[753.1px] h-[575.12px] object-cover"
        alt=""
        src="/5b1356c175-1@2x.png"
      />
      <div className="absolute top-[2384.98px] left-[208px] text-6xl leading-[163%] font-semibold text-primary-green">
        Feeling Curious?
      </div>
      <b className="absolute top-[2434.97px] left-[120px] text-10xl leading-[163%] inline-block w-[644.09px]">
        GET IN TOUCH
      </b>
      <div className="absolute top-[2539.02px] left-[120px] rounded-base bg-white shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] box-border w-[179.57px] h-[165.76px] border-[1px] border-solid border-primary-green" />
      <div className="absolute top-[2538.36px] left-[310.57px] rounded-base bg-white shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] box-border w-[179.57px] h-[165.76px] border-[1px] border-solid border-primary-green" />
      <img
        className="absolute top-[2572.21px] left-[188.51px] w-[42.55px] h-[43.21px]"
        alt=""
        src="/group-13174.svg"
      />
      <div className="absolute top-[2571.6px] left-[379.08px] w-[42.55px] h-[43.21px]">
        <div className="absolute top-[0px] left-[0px] w-[42.55px] h-[43.21px] overflow-hidden" />
      </div>
      <div className="absolute top-[2627.46px] left-[166.79px] text-lg leading-[163%] text-center">
        <p className="[margin-block-start:0] [margin-block-end:0px]">
          <span className="font-medium">{`24/7 `}</span>
        </p>
        <p className="m-0">
          <b>Available</b>
        </p>
      </div>
      <div className="absolute top-[2626.85px] left-[354.36px] text-lg leading-[163%] text-center">
        <p className="[margin-block-start:0] [margin-block-end:0px]">
          <span className="font-medium">{`Quick `}</span>
        </p>
        <p className="m-0">
          <b>Response</b>
        </p>
      </div>
      <img
        className="absolute top-[2569px] left-[357px] w-[65px] h-14 overflow-hidden"
        alt=""
        src="/mdiemailquickoutline.svg"
      />
      <div className="absolute top-[3045px] left-[0px] w-[1440px] h-[1014px] overflow-hidden text-2xs text-font-color-light-subtitle font-caption-caption-2-medium">
        <div className="absolute top-[73.76px] left-[90px] text-sm font-semibold font-inter text-text">
          LATEST NEWS ABOUT TECHNOLOGY
        </div>
        <b className="absolute top-[25.76px] left-[178px] text-6xl font-header text-primary-green">
          News
        </b>
        <div className="absolute top-[44.26px] left-[88px] box-border w-[74px] h-0.5 border-t-[2px] border-solid border-primary-green" />
        <AlphaCapTreasury />
        <div className="absolute top-[349px] left-[120px] w-[544px] flex flex-col items-start justify-start gap-[22px] text-7xl text-white font-heading-heading-3">
          <b className="self-stretch relative leading-[44px]">
            How Technology Trends are Changing the app Industry
          </b>
          <div className="self-stretch flex flex-col py-0 pr-[430px] pl-0 items-start justify-center text-xs text-font-color-light-subtitle font-caption-caption-2-medium">
            <div className="rounded bg-gray-600 overflow-hidden flex flex-row py-1 px-2 items-center justify-center">
              <div className="relative leading-[22px] font-medium">New</div>
            </div>
          </div>
        </div>
        <div className="absolute top-[128px] left-[733px] rounded-small bg-white box-border w-[298px] h-[419px] flex flex-col pt-0 px-0 pb-4 items-start justify-start border-[1px] border-solid border-gray-700">
          <img
            className="self-stretch relative rounded-t-small rounded-b-none max-w-full overflow-hidden h-[195px] shrink-0 object-cover"
            alt=""
            src="/thumbnail@2x.png"
          />
          <div className="self-stretch flex flex-col p-5 items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start gap-[13px]">
              <div className="self-stretch flex flex-col py-0 pr-40 pl-0 items-start justify-center">
                <div className="rounded bg-darkgray-300 overflow-hidden flex flex-row py-0 px-1.5 items-center justify-center">
                  <div className="relative leading-[22px] font-medium">
                    Tech
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start text-base text-gray-400 font-header">
                <div className="flex-1 relative leading-[163%] font-semibold">
                  Maintain Security And Trust
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-xs">
                <div className="flex-1 relative leading-[22px]">
                  Lorem ipsum dolor sit amet consectetur. Consectetur in vitae
                  tincidunt vel id mauris dis.
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-[129px] left-[734px] w-[296px] h-[196px] object-cover"
          alt=""
          src="/mask-group@2x.png"
        />
        <div className="absolute top-[128px] left-[1055px] rounded-small bg-white box-border w-[298px] flex flex-col pt-0 px-0 pb-4 items-start justify-start border-[1px] border-solid border-gray-700">
          <img
            className="self-stretch relative rounded-t-small rounded-b-none max-w-full overflow-hidden h-[195px] shrink-0 object-cover"
            alt=""
            src="/thumbnail1@2x.png"
          />
          <div className="self-stretch flex flex-col p-5 items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start gap-[13px]">
              <div className="self-stretch flex flex-col py-0 pr-40 pl-0 items-start justify-center">
                <div className="rounded bg-darkgray-300 overflow-hidden flex flex-row py-0 px-1.5 items-center justify-center">
                  <div className="relative leading-[22px] font-medium">
                    Tech
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start text-base text-gray-400 font-header">
                <div className="flex-1 relative leading-[163%] font-semibold">
                  5 Things 2020 Taught Us About Innovation
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-xs">
                <div className="flex-1 relative leading-[22px]">
                  Lorem ipsum dolor sit amet consectetur. Consectetur in vitae
                  tincidunt vel id mauris dis.
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-[129px] left-[1056px] w-[296px] h-[196px] object-cover"
          alt=""
          src="/mask-group1@2x.png"
        />
        <div className="absolute top-[562px] left-[89px] rounded-small bg-white box-border w-[298px] flex flex-col pt-0 px-0 pb-4 items-start justify-start border-[1px] border-solid border-gray-700">
          <img
            className="self-stretch relative rounded-t-small rounded-b-none max-w-full overflow-hidden h-[195px] shrink-0 object-cover"
            alt=""
            src="/unsplash2s9n9qhssci@2x.png"
          />
          <div className="self-stretch flex flex-col p-5 items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start gap-[13px]">
              <div className="self-stretch flex flex-col py-0 pr-40 pl-0 items-start justify-center">
                <div className="rounded bg-darkgray-200 overflow-hidden flex flex-row py-0 px-1.5 items-center justify-center">
                  <div className="relative leading-[22px] font-medium">
                    Tech
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start text-base text-gray-400 font-header">
                <div className="flex-1 relative leading-[163%] font-semibold">
                  How to setup a wallet in your account
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-xs">
                <div className="flex-1 relative leading-[22px]">
                  Lorem ipsum dolor sit amet consectetur. Consectetur in vitae
                  tincidunt vel id mauris dis.
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-[563px] left-[90px] w-[296px] h-[196px] object-cover"
          alt=""
          src="/mask-group2@2x.png"
        />
        <div className="absolute top-[562px] left-[1055px] rounded-small bg-white box-border w-[298px] h-[397px] flex flex-col pt-0 px-0 pb-4 items-start justify-start border-[1px] border-solid border-gray-700">
          <img
            className="self-stretch relative rounded-t-small rounded-b-none max-w-full overflow-hidden h-[195px] shrink-0 object-cover"
            alt=""
            src="/unsplashh-kabgs8fmw@2x.png"
          />
          <div className="self-stretch flex flex-col p-5 items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start gap-[13px]">
              <div className="self-stretch flex flex-col py-0 pr-40 pl-0 items-start justify-center">
                <div className="rounded bg-darkgray-300 overflow-hidden flex flex-row py-0 px-1.5 items-center justify-center">
                  <div className="relative leading-[22px] font-medium">
                    Tech
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start text-base text-gray-400 font-header">
                <div className="flex-1 relative leading-[163%] font-semibold">
                  Project Management Trends
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-xs">
                <div className="flex-1 relative leading-[22px]">
                  Lorem ipsum dolor sit amet consectetur. Consectetur in vitae
                  tincidunt vel id mauris dis.
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-[563px] left-[1056px] w-[296px] h-[196px] object-cover"
          alt=""
          src="/mask-group3@2x.png"
        />
        <div className="absolute top-[562px] left-[733px] rounded-small bg-white box-border w-[298px] flex flex-col pt-0 px-0 pb-4 items-start justify-start border-[1px] border-solid border-gray-700">
          <img
            className="self-stretch relative rounded-t-small rounded-b-none max-w-full overflow-hidden h-[195px] shrink-0 object-cover"
            alt=""
            src="/unsplash9opihrpivr0@2x.png"
          />
          <div className="self-stretch flex flex-col p-5 items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start gap-[13px]">
              <div className="self-stretch flex flex-col py-0 pr-40 pl-0 items-start justify-center">
                <div className="rounded bg-darkgray-300 overflow-hidden flex flex-row py-0 px-1.5 items-center justify-center">
                  <div className="relative leading-[22px] font-medium">
                    Tech
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start text-base text-gray-400 font-header">
                <div className="flex-1 relative leading-[163%] font-semibold">
                  6 Things To Look For In An Agile Program.
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-xs">
                <div className="flex-1 relative leading-[22px]">
                  Lorem ipsum dolor sit amet consectetur. Consectetur in vitae
                  tincidunt vel id mauris dis.
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-[562px] left-[734px] w-[296px] h-[199px] object-cover"
          alt=""
          src="/mask-group4@2x.png"
        />
        <div className="absolute top-[562px] left-[411px] rounded-small bg-white box-border w-[298px] flex flex-col pt-0 px-0 pb-4 items-start justify-start border-[1px] border-solid border-gray-700">
          <img
            className="self-stretch relative rounded-t-small rounded-b-none max-w-full overflow-hidden h-[195px] shrink-0 object-cover"
            alt=""
            src="/unsplashazsi1uxm760@2x.png"
          />
          <div className="self-stretch flex flex-col p-5 items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start gap-[13px]">
              <div className="self-stretch flex flex-col py-0 pr-40 pl-0 items-start justify-center">
                <div className="rounded bg-darkgray-300 overflow-hidden flex flex-row py-0 px-1.5 items-center justify-center">
                  <div className="relative leading-[22px] font-medium">
                    Tech
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start text-base text-gray-400 font-header">
                <div className="flex-1 relative leading-[163%] font-semibold">
                  5 Tips For Developing An Innovation..
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-xs">
                <div className="flex-1 relative leading-[22px]">
                  Lorem ipsum dolor sit amet consectetur. Consectetur in vitae
                  tincidunt vel id mauris dis.
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-[562px] left-[412px] w-[296px] h-[196px] object-cover"
          alt=""
          src="/mask-group5@2x.png"
        />
      </div>
      <div className="absolute top-[1684px] left-[0px] w-[1440px] h-[1338px] overflow-hidden">
        <FrameComponent />
      </div>
      <div className="absolute top-[1497px] left-[0px] w-[1440px] h-[190px] overflow-hidden" />
      <div className="absolute top-[1003px] left-[0px] rounded-[37px] w-[1440px] overflow-hidden flex flex-row py-[23px] px-[116px] box-border items-end justify-start gap-[35px] text-6xl text-primary-green">
        <div className="flex flex-col py-[7px] px-0 items-center justify-start gap-[27px]">
          <div className="flex flex-row items-start justify-start">
            <b className="relative">Services</b>
          </div>
          <div className="relative rounded-base bg-white w-[351px] h-[349px] shrink-0 overflow-hidden text-3xl text-headings">
            <RectangleComponent1 />
            <div className="absolute top-[26.28px] left-[2px] box-border w-[74px] h-0.5 border-t-[2px] border-solid border-primary-green" />
            <b className="absolute top-[143.28px] left-[17px]">
              App Development
            </b>
            <div className="absolute top-[217.28px] left-[17px] text-base leading-[163%] font-medium text-text inline-block w-[299.59px]">
              Application development is at the heart of what we do. Our team
              are skilled in creating custom software solutions
            </div>
            <div className="absolute top-[53px] left-[39px] flex flex-row items-start justify-start">
              <img
                className="relative w-[30.5px] h-[42px] shrink-0"
                alt=""
                src="/group-13173.svg"
              />
            </div>
            <img
              className="absolute top-[314px] left-[305px] w-6 h-6 overflow-hidden"
              alt=""
              src="/arrowback.svg"
            />
          </div>
        </div>
        <div className="relative w-[378px] h-[365px] shrink-0 overflow-hidden text-3xl text-white">
          <RectangleIcon />
          <b className="absolute top-[135.28px] left-[40px]">
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              Human-To-Machine
            </p>
            <p className="m-0">Communication</p>
          </b>
          <div className="absolute top-[209.28px] left-[40px] text-base leading-[163%] font-medium inline-block w-[296.86px]">
            Another crucial area of focus for our company. With the
            proliferation of smart devices and the Internet of Things (IoT)
          </div>
          <img
            className="absolute top-[325px] left-[324px] w-6 h-6 overflow-hidden"
            alt=""
            src="/arrowback1.svg"
          />
          <img
            className="absolute top-[54.22px] left-[46.52px] w-11 h-11 overflow-hidden"
            alt=""
            src="/carbonmachinelearning.svg"
          />
        </div>
        <div className="relative rounded-[19px] bg-white box-border w-[377px] h-[366px] shrink-0 text-base text-text border-[1px] border-solid border-gray-800">
          <RectangleComponent />
          <div className="absolute top-[189px] left-[39px] leading-[163%] font-medium inline-block w-[297.33px]">
            Also an essential part of our offering. With the ability to connect
            and communicate with other devices and systems,
          </div>
          <img
            className="absolute top-[319px] left-[324px] w-6 h-6 overflow-hidden"
            alt=""
            src="/arrowback.svg"
          />
          <b className="absolute top-[129px] left-[39px] text-3xl text-headings">
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              Machine-To-Machine
            </p>
            <p className="m-0">Communication</p>
          </b>
          <img
            className="absolute top-[61px] left-[39px] w-[61.88px] h-[61.88px] object-cover"
            alt=""
            src="/ai-1@2x.png"
          />
        </div>
      </div>
      <div className="absolute top-[831px] left-[0px] w-[1440px] h-[172px] overflow-hidden flex flex-col py-[19px] px-[329px] box-border items-center justify-center">
        <div className="w-[782px] h-[134px] shrink-0 overflow-hidden" />
      </div>
      <div className="absolute top-[141px] left-[0px] w-[1440px] h-[690px] overflow-hidden flex flex-row py-[19px] px-[121px] box-border items-center justify-center text-8xl">
        <div className="self-stretch w-[626px] shrink-0 flex flex-col items-start justify-start">
          <strong
            className="relative font-semibold inline-block w-[690.5px] h-[108.56px] shrink-0 [&.animate]:animate-[4s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0]"
            data-animate-on-scroll
          >
            <span>{`Welcome to `}</span>
            <span className="text-primary-green">LOCOFY</span>
          </strong>
          <div className="relative text-base leading-[163%] font-medium text-text inline-block w-[610.5px] h-[58.69px] shrink-0">{`Where we specialize in providing services to help businesses transform and thrive in the digital age. `}</div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[215px] h-[63px] shrink-0 hover:animate-[3s_ease_0s_infinite_normal_none_rotate-center] hover:opacity-[1]">
            <div className="absolute top-[0px] left-[0px] w-[215px] h-[63px]">
              <div className="absolute top-[0px] left-[0px] rounded-md bg-headings w-[215px] h-[63px]" />
              <div className="absolute top-[17.75px] left-[58px] text-lg leading-[163%] font-medium font-header text-white text-left inline-block w-[98px]">
                Loco Now
              </div>
            </div>
          </button>
        </div>
        <div className="self-stretch w-[626px] shrink-0 flex flex-col items-center justify-center ml-[-54px] text-base text-gray-400 font-poppins">
          <div className="relative w-[600.05px] h-[471.52px] shrink-0">
            <img
              className="absolute top-[0px] left-[169.21px] w-[430.84px] h-[471.52px] object-cover"
              alt=""
              src="/group-231@2x.png"
            />
            <div className="absolute top-[359.77px] left-[0px] w-[270.25px] h-[62.45px]">
              <div className="absolute top-[0px] left-[0px] rounded-lg bg-white shadow-[0px_0px_22px_rgba(38,_50,_56,_0.35)] box-border w-[270.25px] h-[62.45px] border-[1px] border-solid border-white" />
              <div className="absolute top-[14.62px] left-[35.86px] w-[198.53px] h-[33.2px]">
                <div className="absolute top-[2.62px] left-[47.05px] font-medium inline-block w-[151.48px] h-[24.9px]">
                  App Development
                </div>
                <img
                  className="absolute top-[0px] left-[0px] w-[33.2px] h-[33.2px] overflow-hidden"
                  alt=""
                  src="/webdesignsvgrepocom-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute top-[4063px] left-[0px] w-[1440px] h-[150px] overflow-hidden"
        alt=""
        src="/frame-13186.svg"
      />
      <div className="absolute top-[0px] left-[0px] w-[1440px] h-[141px] overflow-hidden flex flex-row py-[35px] px-28 box-border items-center justify-center gap-[150px] text-base text-color font-poppins md:pl-5 md:pr-5 md:box-border">
        <img
          className="relative w-[92.55px] h-[70.63px] shrink-0 object-cover"
          alt=""
          src="/cogailogotrans1-12@2x.png"
        />
        <div className="w-[726px] shrink-0 flex flex-row items-center justify-center gap-[55px]">
          <div className="flex flex-row items-start justify-start gap-[55px] md:hidden">
            <div className="relative font-medium text-headings">Home</div>
            <div className="relative font-medium">About</div>
            <div className="relative font-medium">Services</div>
            <div className="relative font-medium">Industries</div>
            <div className="relative font-medium">Resources</div>
          </div>
          <div className="self-stretch flex-1 rounded-md bg-headings flex flex-row py-[13px] px-2.5 items-center justify-center text-white font-header">
            <div className="relative leading-[163%] font-medium">
              GET A QUOTE
            </div>
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-white overflow-hidden hidden flex-col items-start justify-start gap-[6px] md:flex">
            <div className="relative bg-yellowgreen w-[68px] h-3 shrink-0" />
            <div className="relative bg-yellowgreen w-[68px] h-3 shrink-0" />
            <div className="relative bg-yellowgreen w-[68px] h-3 shrink-0" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeOption3;
