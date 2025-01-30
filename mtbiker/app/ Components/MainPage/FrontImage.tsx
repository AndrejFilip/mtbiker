import React from "react";
import canyon from "../../images/canyon.png";
import bike from "../../images/bike.png";
import eshop from "../../images/eshop.png";
import predajne from "../../images/predajne.png";
import kurier from "../../images/kurier.png";
import data from "../../Texts/paragraphs.json";

export const FrontImage = () => {
  const paragraphTexts = data.texts;
  const canyonPage =
    "https://www.canyon.com/cs-sk/horska-kola/cross-country-kola/exceed/exceed-cf/exceed-cf-6/3436.html?dwvar_3436_pv_rahmenfarbe=M076_P10";

  const pictures = [eshop.src, bike.src, predajne.src, kurier.src];

  return (
    <div>
      <div>
        <img
          {...{
            alt: "front image",
            src: canyon.src,
            className: "w-full h-[300px]",
          }}
        ></img>
        <p
          {...{
            className:
              "absolute text-5xl top-[100px] left-[50px] font-bold flex text-center",
          }}
        >
          Canyon Exceed <br /> CF 6
        </p>
        <form {...{ action: canyonPage }}>
          <button
            {...{
              className:
                "absolute top-[210px] left-[165px] btn bg-orange-400 border-none text-white hover:bg-orange-500",
            }}
          >
            Objav teraz
          </button>
        </form>
      </div>
      <div {...{ className: "h-[60px] bg-black" }}>
        <div
          {...{
            className: "text-white flex flex-row justify-evenly",
          }}
        >
          <div {...{ className: "flex flex-row justify-evenly space-x-6" }}>
            {paragraphTexts.map((text, i) => (
              <>
                <img
                  {...{
                    src: pictures[i],
                    className:
                      "w-[30px] h-[30px] my-auto ml-3  mx-auto bg-black",
                    alt: "bar pictures",
                  }}
                />
                <p
                  {...{
                    className: "text-sm w-[250px] pt-1 font-serif my-auto",
                  }}
                >
                  {text.text}
                </p>
              </>
            ))}
            <button
              {...{
                className: "btn btn-outline btn-warning mt-1.5",
              }}
            >
              Viac info o nákupe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
