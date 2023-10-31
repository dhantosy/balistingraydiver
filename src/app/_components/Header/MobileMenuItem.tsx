'use client'

import React from 'react'
import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

import {
  Text,
  IconMobileArrow,
  MenuItem,
  DropdownMobile,
  DropdownText,
  TextHasDropdownMobile,
} from './styles'

interface Child {
  title?: string;
  link?: string;
}

type Props = {
  parent: string;
  hasChildren?: Child[],
  linkParent?: string;
};

export default function MobileMenuItem({ parent, hasChildren, linkParent }: Props) {
  const pathname = usePathname();
  const [mobileMenuItemExpand, setMobileMenuItemExpand] = useState(false);

  useEffect(() => {
    setMobileMenuItemExpand(false);
  }, [pathname])

  const handleMobileMenuItemClick = useCallback(() => {
    setMobileMenuItemExpand(!mobileMenuItemExpand);
  }, [mobileMenuItemExpand]);

  return (
    <div>
      <MenuItem className='mobile'>
        <Text>
          {hasChildren?.length && (
            <>
              <TextHasDropdownMobile onClick={handleMobileMenuItemClick}>
                <div>{parent}</div>
                <IconMobileArrow>
                  {mobileMenuItemExpand ? <FaAngleUp /> : <FaAngleDown />}
                </IconMobileArrow>
              </TextHasDropdownMobile>
              <DropdownMobile $isMobileMenuItemExpand={mobileMenuItemExpand}>
                {hasChildren.map(({ title, link }) => {
                  return (
                    <Link href={link || ''} key={title}>
                      <DropdownText>
                        {title}
                      </DropdownText>
                    </Link>
                  )
                })}
              </DropdownMobile>
            </>
          )}
          {linkParent && (
            <Link href={linkParent}>
              <TextHasDropdownMobile>
                {parent}
              </TextHasDropdownMobile>
            </Link>
          )}
        </Text>
      </MenuItem>
    </div>
  )
}
