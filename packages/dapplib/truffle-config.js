require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enroll supply suggest name reward stereo proud harvest nasty fortune soon'; 
let testAccounts = [
"0x96c719cea36c0b8a0513572e105d36e3893067362be9b8ef9ee9ff76ed083b5b",
"0xa39cc5ffdc3e748d51dc937d5a93c2da078938bbb6b86c3eb6ec1c832e7cc9be",
"0x951132f6ce8e79db3e520bc900dd0c4393973a7e0686249989dc9e4be38cb0bd",
"0x368d7807b34b775aad1633f5e6bab0c1b17ae72b412ec1d83d7aaaf9ad85ffe6",
"0xa646ad3c8f602dfca1da7c0eedc1b382ca3160c19cbc6b237f8c2f689804ea39",
"0xf518ea809b60d09282b5a98e661bf4150db440eb8141227927e3e94e1ed6cf22",
"0x24c3caa9355ab8f915d38e10c05a77ce77e52a969c4a5cdb25a8f386c8fe75ec",
"0xae843055464b914fe53433dcd91267375d6f7c986f7d629c3852f6ee532f5c50",
"0x1386f7c183d9959725f259c5adaf891868d86fb9d342f95a08570af21b84c274",
"0x17b9b9d3dfe079792dd59eb51a5f6042cdd072427603fac39486b30d33323803"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

