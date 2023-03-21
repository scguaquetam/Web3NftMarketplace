import { ethers } from 'ethers';
import { InjectedConnector } from '@web3-react/injected-connector'

const connector = new InjectedConnector({ 
  supportedChainIds: [1, 3, 4, 5, 42] 
})
const getLibrary = (provider) => {
  return new ethers.BrowserProvider(provider);
}

export {connector, getLibrary};