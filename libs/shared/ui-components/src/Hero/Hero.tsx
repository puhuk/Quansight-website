import { FC } from 'react';

import clsx from 'clsx';
import Image from 'next/image';

import { THeroProps, HeroVariant } from './types';

export const Hero: FC<THeroProps> = ({
  title,
  subTitle,
  variant,
  imageSrc,
  imageAlt,
}) => {
  const isLargeHero =
    variant === HeroVariant.Large || variant === HeroVariant.LargeOverlapping;
  const isMediumHero = variant === HeroVariant.Medium;
  const isOverlappingHero = variant === HeroVariant.LargeOverlapping;

  return (
    <div
      className={clsx(
        'overflow-hidden w-full h-[730px] bg-[#000000]',
        isLargeHero && 'md:h-[970px]',
        isMediumHero && 'md:h-[730px]',
        isOverlappingHero && 'mb-[-31rem] md:mb-[-51rem]',
      )}
    >
      <div className="relative mx-auto h-full max-w-layout">
        <Image
          src={imageSrc}
          alt={imageAlt}
          layout="fill"
          objectFit="contain"
          objectPosition="center"
        />
        <div
          className={clsx(
            'relative px-[2rem] placeholder:md:px-0 pt-[8.8rem] md:absolute md:pt-0',
            isLargeHero && 'md:top-52 md:left-[14%] md:w-1/2',
            isMediumHero &&
              'flex flex-col justify-center items-center w-full h-full',
          )}
        >
          <h2
            className={clsx(
              'font-extrabold leading-[6rem] text-white font-heading',
              isLargeHero
                ? 'mb-[1.5rem] text-[4rem] md:mb-[4rem] md:text-[5rem]'
                : 'text-[5rem] text-center',
            )}
          >
            {title}
          </h2>
          {subTitle && (
            <h3
              className={clsx(
                'text-[4rem] font-extrabold leading-[4.8rem] text-white font-heading',
                isLargeHero && 'text-[3rem] md:text-[4rem]',
                isMediumHero && 'text-center',
              )}
            >
              {subTitle}
            </h3>
          )}
        </div>
      </div>
    </div>
  );
};
