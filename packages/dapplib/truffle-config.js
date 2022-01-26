require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enroll frame short fan return ranch come gesture merry forward treat'; 
let testAccounts = [
"0x9c38dbe5b4e3cf6a162c22eadf30fd60416f771b95119d91737587f0bbd536fb",
"0x8ace4c167b4ed7ff251e8311b4c70493cb4f73bfff5c389522aa3e8709a65d86",
"0x708715cf4a3d50bce86baca3a369696028371f25dfdce670891b1b97ea836a4c",
"0x8d3c551d9a9d5df8d4ce2c90499ab43b1fecba7d421ae2be1fb861abbc9296ec",
"0xf47e41ee2aa170b432602e5b102306f1f570b3a07cfa0e19ad14e3bbbe664fb4",
"0x6fc09a1cb5302d50b919e3ded4aafdf3938d68a34af74a1b8d0a227a43502d9e",
"0x8e529cab62fe61bfabc45cddfc7b8584f792e2dae71340412acbbacc2bc14e51",
"0x72483af84793ec7b4e8ada9b72bfb2e60a07293b2c65ff281c6f59936d098370",
"0x00f7cf17873f6d5daa1b30dbf55b40d515feac85f756946a105fe48aa4922d78",
"0x655f6a021e0897d4d614960d30a957a38e99de4501fde1bf404a93ca572007cf"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

