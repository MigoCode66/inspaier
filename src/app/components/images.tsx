'use client';
import Image from 'next/image';
import data from '../../data.json';
import HoverAnimation from './hoveranimation';

type ImageData = {
  src: string;
  author: string;
  url: string;
  key: number;
  proportion?: number;
};

const images = () => {
  let numberofrows: number | Array<number> = 3;
  let temp = [];
  for (let i: number = 0; i < numberofrows; i++) {
    temp.push(i);
  }
  numberofrows = temp;

  return (
    <div className="images">
      {numberofrows.map((i) => {
        return (
          <ul className={`row${i + 1}`} key={i}>
            {data[i].map((data: ImageData) => {
              return (
                <li key={data.key} className="imageConteiner">
                  <style jsx>{`
                    .imageConteiner {
                      height: calc(
                        ${i == 0 ? 27 : i == 1 ? 31 : 36}vw / ${data.proportion} +
                          17px
                      );
                    }
                    @media screen and (max-width: 1000px) {
                      .imageConteiner {
                        height: calc(90vw / ${data.proportion});
                      }
                    }
                  `}</style>
                  <Image
                    className="image"
                    src={data.src}
                    alt={`Protfoli made by ${data.author}`}
                    fill
                  />
                  <HoverAnimation>
                    {/* code  //1// */}
                    {data.author}
                    {data.url}
                  </HoverAnimation>
                </li>
              );
            })}
          </ul>
        );
      })}
    </div>
  );
};

export default images;
