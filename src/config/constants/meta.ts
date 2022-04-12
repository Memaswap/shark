import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'MemaSwap Coin (MET)',
  description:
    'Built for the MemaSwap community from the community. Hold MEMA tokens to earn, win NFT & more...',
  image:
    'https://ipfs.io/ipfs/Qmex3sh8S8i1FgYuegpjECaeTmun422Zwb147pkBEoha6d',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('MemaSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('MemaSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('MemaSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('MemaSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('MemaSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('MemaSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('MemaSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('MemaSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('MemaSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('MemaSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('MemaSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('MemaSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('MemaSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('MemaSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('MemaSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('MemaSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('MemaSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('MemaSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('MemaSwap Info & Analytics')}`,
        description: 'View statistics for MemaSwap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('MemaSwap Info & Analytics')}`,
        description: 'View statistics for MemaSwap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('MemaSwap Info & Analytics')}`,
        description: 'View statistics for MemaSwap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('MemaSwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('MemaSwap')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('MemaSwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('MemaSwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('MemaSwap Squad')} | ${t('MemaSwap')}`,
      }
    default:
      return null
  }
}
