import {
  MenuItemsType,
  DropdownMenuItemType,
  SwapIcon,
  SwapFillIcon,
  EarnFillIcon,
  EarnIcon,
  TrophyIcon,
  TrophyFillIcon,
  NftIcon,
  NftFillIcon,
  MoreIcon,
} from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
/* import { nftsBaseUrl } from 'views/Nft/market/constants'

const perpetualLangs = { en: 'en', 'zh-cn': 'zh-CN', ko: 'ko' }
const perpLangMap = (code: string) => {
  if (perpetualLangs[code]) {
    return perpetualLangs[code]
  }
  return 'en'
} */

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t'], code: string) => ConfigMenuItemsType[] = (t, code) => [
  {
    label: t('Exchange'),
    icon: SwapIcon,
    fillIcon: SwapFillIcon,
    href: '/swap',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Swap'),
        href: '/swap',
      } /* 
      {
        label: t('Limit'),
        href: '/limit-orders',
      }, */,
      /* {
        label: t('Zap'),
        href: 'https://zap.sharknado.io',
      }, */
      {
        label: t('Liquidity'),
        href: '/liquidity',
      } /* 
      {
        label: t('Perpetual'),
        href: `https://perp.pancakeswap.finance/${perpLangMap(code)}/futures/BTCUSDT`,
        type: DropdownMenuItemType.EXTERNAL_LINK,
      }, */,
    ],
  }, 
  {
    label: t('Earn'),
    href: '/farms',
    icon: EarnIcon,
    fillIcon: EarnFillIcon,
    items: [
      {
        label: t('Staking'),
        href: '/pools',
      },
      {
        label: t('Farming'),
        href: '/farms',
      },
    ],
  },
  // {
  //   label: t('Zap'),
  //   href: `https://zap.sharknado.io`,
  //   icon: NftIcon,
  //   fillIcon: NftFillIcon,
  //   items: [],
  // },
  // {
  //   label: t('Earn'),
  //   href: '#',
  //   icon: TrophyIcon,
  //   fillIcon: TrophyFillIcon,
  //   items: [
  //     {
  //       label: t('Staking'),
  //       href: '/pools',
  //     },
  //     {
  //       label: t('Farming'),
  //       href: '#',
  //     },
  //     /* 
  //     {
  //       label: t('Trading Competition'),
  //       href: '/competition',
  //     },
  //     {
  //       label: t('Prediction (BETA)'),
  //       href: '/prediction',
  //     },
  //     {
  //       label: t('Lottery'),
  //       href: '/lottery',
  //     }, */
  //   ],
  // },
  {
    label: t('NFT'),
    href: '/nfts',
    icon: NftIcon,
    fillIcon: NftFillIcon,
    items: [
      {
        label: t('Marketplace'),
        href: '/nfts',
      },
      /* {
        label: t('Collections'),
        href: `${nftsBaseUrl}/collections`,
      },
      {
        label: t('Activity'),
        href: `${nftsBaseUrl}/activity`,
      }, */
    ],
  },
  {
    label: '',
    href: '#',
    icon: MoreIcon,
    hideSubNav: true,
    items: [
      // {
      //   label: t('SHARKO Analytics'),
      //   href: 'https://pancakeswap.finance/info/token/0x7e1d65ee360335fa119ee4b9708e47700efbfc58',
      // } /* 
      // {
      //   label: t('IFO'),
      //   href: '/ifo',
      // }, */,
      // {
      //   label: t('DAO'),
      //   href: 'https://vote.sharknado.io',
      // },
      // {
      //   type: DropdownMenuItemType.DIVIDER,
      // },
      {
        label: t('Landing'),
        href: '#',
      },
      {
        type: DropdownMenuItemType.DIVIDER,
      },
      {
        label: t('Blog'),
        href: 'https://medium.com',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Docs'),
        href: '#',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
]

export default config
