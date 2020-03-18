var config = {};

// self explanatory, your application name, descriptions, etc
config.appName = 'traaittCASH Interface';
config.appDescription = 'WalletShell';
config.appSlogan = 'traaitt digital asset software distribution!';
config.appId = 'traaittcash.walletshell';
config.appGitRepo = 'https://github.com/turtlecoin/turtle-wallet-electron';

// default port number for your daemon (e.g. TurtleCoind)
config.daemonDefaultRpcPort = 14486;

// wallet file created by this app will have this extension
config.walletFileDefaultExt = 'cash';

// change this to match your wallet service executable filename
config.walletServiceBinaryFilename = 'traaittcash-service';

// version on the bundled service (turtle-service)
config.walletServiceBinaryVersion = "v0.13.0";

// config file format supported by wallet service, possible values:
// ini -->  for turtle service (or its forks) version <= v0.8.3
// json --> for turtle service (or its forks) version >= v0.8.4
config.walletServiceConfigFormat = "json";

// default port number for your wallet service (e.g. turtle-service)
config.walletServiceRpcPort = 8447;

// block explorer url, the [[TX_HASH]] will be substituted w/ actual transaction hash
config.blockExplorerUrl = 'https://explorer.traaittcash.com/?hash=[[TX_HASH]]';

// default remote node to connect to, set this to a known reliable node for 'just works' user experience
config.remoteNodeDefaultHost = 'us-east.traaittnode.com';


// remote node list update url, set to null if you don't have one
// for TRTL:
// raw list: https://raw.githubusercontent.com/turtlecoin/turtlecoin-nodes-json/master/turtlecoin-nodes.json
// filtered: https://trtl.nodes.pub/api/getNodes
config.remoteNodeListUpdateUrl = 'https://raw.githubusercontent.com/traaittPlatform/traaittCASH-nodes/master/traaittcash-nodes.json';

// set to false if using raw/unfiltered node list
config.remoteNodeListFiltered = false;

// fallback remote node list, in case fetching update failed, fill this with known to works remote nodes
config.remoteNodeListFallback = [
  'us-east.traaittnode.com:14486',
  'asia-east.traaittnode.com:14486',
  'eu-west.traaittnode.com:14486',
];
config.remoteNodeCacheSupported = false;
config.remoteNodeSslSupported = false;

// your currency name
config.assetName = 'traaittCASH';
// your currency ticker
config.assetTicker = 'TCH';
// your currency address prefix, for address validation
config.addressPrefix = 'cash';
// standard wallet address length, for address validation
config.addressLength = 98;
// integrated wallet address length, for address validation. Added length is length of payment ID encoded in base58.
config.integratedAddressLength = config.addressLength + ((64 * 11) / 8);

// minimum fee for sending transaction
config.minimumFee = 0.0000001;
// minimum amount for sending transaction
config.mininumSend = 0.0000001;
// default mixin/anonimity for transaction
config.defaultMixin = 3;
// to represent human readable value
config.decimalPlaces = 8;
// to convert from atomic unit
config.decimalDivisor = 10 ** config.decimalPlaces;

// obfuscate address book entries, set to false if you want to save it in plain json file.
// not for security because the encryption key is attached here
config.addressBookObfuscateEntries = true;
// key use to obfuscate address book contents
config.addressBookObfuscationKey = '79009fb00ca1b7130832a42de45142cf6c4b7f333fe6fba5';
// initial/sample entries to fill new address book
config.addressBookSampleEntries = [
  {
    name: 'TCH Donation',
    address: 'cashKdCEq5U7W2QDS5ffMETf1smoKLBm3C1GMYvPdEVUU9LKr1uDFrLNPkmfKgzcTcB4ASsypziCeVQ5iqkzC7fZ1pDDLSxgZF',
    paymentId: '',
  }
];
// cipher config for private address book
config.addressBookCipherConfig = {
  algorithm: 'aes-256-gcm',
  saltLenght: 128,
  pbkdf2Rounds: 10000,
  pbkdf2Digest: 'sha512'
};

module.exports = config;