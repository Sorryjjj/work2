export const NAMESPACE_PLACEHOLDER = "Enter namespace ID should be 8 bytes"
export const NAMESPACE_LABEL = "NAMESPACE_ID"

export const HEX_ENCODED_PLACEHOLDER = "Enter data is in hex-encoded bytes of the raw message"
export const HEX_ENCODED_LABEL = "HEX-ENCODED BYTES"

export const SUBMIT_BUTTON_TEXT = "Send Transaction"

export const REPONSE_JSON = {
    "height": 4249,
    "txhash": "B31DEA16E1F3EE13895D4A70FE808801E8BCF8381AACD5071CB51E929F17AB65",
    "codespace": "undefined",
    "code": 111222,
    "raw_log": "recovered: UnmarshalJSON cannot decode empty bytes\nstack:\ngoroutine 61 [running]:\nruntime/debug.Stack()\n\t/usr/local/go/src/runtime/debug/stack.go:24 +0x65\ngithub.com/cosmos/cosmos-sdk/baseapp.newDefaultRecoveryMiddleware.func1({0x1f63960, 0xc00653eef0})\n\t/go/pkg/mod/github.com/celestiaorg/cosmos-sdk@v1.8.0-sdk-0.46.7/baseapp/recovery.go:71 +0x27\ngithub.com/cosmos/cosmos-sdk/baseapp.newRecoveryMiddleware.func1({0x1f63960?, 0xc00653eef0?})\n\t/go/pkg/mod/github.com/celestiaorg/cosmos-sdk@v1.8.0-sdk-0.46.7/baseapp/recovery.go:39 +0x30\ngithub.com/cosmos/cosmos-sdk/baseapp.processRecovery({0x1f63960, 0xc00653eef0}, 0xc0091f4580?)\n\t/go/pkg/mod/github.com/celestiaorg/cosmos-sdk@v1.8.0-sdk-0.46.7/baseapp/recovery.go:28 +0x37\ngithub.com/cosmos/cosmos-sdk/baseapp.processRecovery({0x1f63960, 0xc00653eef0}, 0x2d32158?)\n\t/go/pkg/mod/github.com/celestiaorg/cosmos-sdk@v1.8.0-sdk-0.46.7/baseapp/recovery.go:33 +0x5e\ngithub.com/cosmos/cosmos-sdk/baseapp.(*BaseApp).runTx.func1()\n\t/go/pkg/mod/github.com/celestiaorg/cosmos-sdk@v1.8.0-sdk-0.46.7/baseapp/baseapp.go:639 +0xf0\npanic({0x1f63960, 0xc00653eef0})\n\t/usr/local/go/src/runtime/panic.go:838 +0x207\ngithub.com/cosmos/cosmos-sdk/x/params/types.Subspace.Get({{0x2d31748, 0xc001099090}, 0xc0004ee198, {0x2d0e170, 0xc001099730}, {0x2d0e1c0, 0xc001099c10}, {0xc00168aba0, 0x4, 0x12}, ...}, ...)\n\t/go/pkg/mod/github.com/celestiaorg/cosmos-sdk@v1.8.0-sdk-0.46.7/x/params/types/subspace.go:110 +0x307\ngithub.com/celestiaorg/celestia-app/x/blob/keeper.Keeper.GasPerBlobByte(...)\n\t/celestia-app/x/blob/keeper/params.go:36\ngithub.com/celestiaorg/celestia-app/x/blob/keeper.Keeper.PayForBlobs({{0x2d31748, 0xc001099090}, {0x2d0e170, 0xc001099ac0}, {0x2d0e170, 0x0}, {{0x2d31748, 0xc001099090}, 0xc0004ee198, {0x2d0e170, ...}, ...}}, ...)\n\t/celestia-app/x/blob/keeper/keeper.go:60 +0x3a8\ngithub.com/celestiaorg/celestia-app/x/blob.NewHandler.func1({{0x2d24c58, 0xc000138020}, {0x2d32158, 0xc00acc0680}, {{0xb, 0x0}, {0xc0067752e0, 0x9}, 0x1099, {0x5f89ec0, ...}, ...}, ...}, ...)\n\t/celestia-app/x/blob/handler.go:20 +0x195\ngithub.com/cosmos/cosmos-sdk/baseapp.(*BaseApp).runMsgs(_, {{0x2d24c58, 0xc000138020}, {0x2d32158, 0xc00acc0680}, {{0xb, 0x0}, {0xc0067752e0, 0x9}, 0x1099, ...}, ...}, ...)\n\t/go/pkg/mod/github.com/celestiaorg/cosmos-sdk@v1.8.0-sdk-0.46.7/baseapp/baseapp.go:800 +0x7a8\ngithub.com/cosmos/cosmos-sdk/baseapp.(*BaseApp).runTx(0xc000be6e00, 0x3, {0xc0026698c0, 0x143, 0x143})\n\t/go/pkg/mod/github.com/celestiaorg/cosmos-sdk@v1.8.0-sdk-0.46.7/baseapp/baseapp.go:725 +0xc45\ngithub.com/cosmos/cosmos-sdk/baseapp.(*BaseApp).DeliverTx(0xc000be6e00, {{0xc0026698c0?, 0x20?, 0xc00abfe9c0?}})\n\t/go/pkg/mod/github.com/celestiaorg/cosmos-sdk@v1.8.0-sdk-0.46.7/baseapp/abci.go:283 +0x17a\ngithub.com/tendermint/tendermint/abci/client.(*localClient).DeliverTxAsync(0xc000cf9320, {{0xc0026698c0?, 0x0?, 0xc000cf9320?}})\n\t/go/pkg/mod/github.com/celestiaorg/celestia-core@v1.14.0-tm-v0.34.23/abci/client/local_client.go:93 +0x105\ngithub.com/tendermint/tendermint/proxy.(*appConnConsensus).DeliverTxAsync(0xc00a464780?, {{0xc0026698c0?, 0x20?, 0xb?}})\n\t/go/pkg/mod/github.com/celestiaorg/celestia-core@v1.14.0-tm-v0.34.23/proxy/app_conn.go:88 +0x26\ngithub.com/tendermint/tendermint/state.execBlockOnProxyApp({0x2d25e10?, 0xc000d69f20}, {0x2d2ffe8, 0xc000dafdd0}, 0xc008a5ba00, {0x2d329b0, 0xc001194120}, 0x1098?)\n\t/go/pkg/mod/github.com/celestiaorg/celestia-core@v1.14.0-tm-v0.34.23/state/execution.go:390 +0x822\ngithub.com/tendermint/tendermint/state.(*BlockExecutor).ApplyBlock(_, {{{0xb, 0x0}, {0xc000c8b080, 0x7}}, {0xc000c8b087, 0x9}, 0x1, 0x1098, {{0xc00a536640, ...}, ...}, ...}, ...)\n\t/go/pkg/mod/github.com/celestiaorg/celestia-core@v1.14.0-tm-v0.34.23/state/execution.go:210 +0x171\ngithub.com/tendermint/tendermint/consensus.(*State).finalizeCommit(0xc0010dc700, 0x1099)\n\t/go/pkg/mod/github.com/celestiaorg/celestia-core@v1.14.0-tm-v0.34.23/consensus/state.go:1668 +0xb2d\ngithub.com/tendermint/tendermint/consensus.(*State).tryFinalizeCommit(0xc0010dc700, 0x1099)\n\t/go/pkg/mod/github.com/celestiaorg/celestia-core@v1.14.0-tm-v0.34.23/consensus/state.go:1576 +0x2ff\ngithub.com/tendermint/tendermint/consensus.(*State).enterCommit.func1()\n\t/go/pkg/mod/github.com/celestiaorg/celestia-core@v1.14.0-tm-v0.34.23/consensus/state.go:1511 +0x87\ngithub.com/tendermint/tendermint/consensus.(*State).enterCommit(0xc0010dc700, 0x1099, 0x0)\n\t/go/pkg/mod/github.com/celestiaorg/celestia-core@v1.14.0-tm-v0.34.23/consensus/state.go:1549 +0xcb7\ngithub.com/tendermint/tendermint/consensus.(*State).addVote(0xc0010dc700, 0xc008e7b220, {0x0, 0x0})\n\t/go/pkg/mod/github.com/celestiaorg/celestia-core@v1.14.0-tm-v0.34.23/consensus/state.go:2171 +0xb7c\ngithub.com/tendermint/tendermint/consensus.(*State).tryAddVote(0xc0010dc700, 0xc008e7b220, {0x0?, 0x47b9a6?})\n\t/go/pkg/mod/github.com/celestiaorg/celestia-core@v1.14.0-tm-v0.34.23/consensus/state.go:1963 +0x2c\ngithub.com/tendermint/tendermint/consensus.(*State).handleMsg(0xc0010dc700, {{0x2d06640?, 0xc0011f6c70?}, {0x0?, 0x0?}})\n\t/go/pkg/mod/github.com/celestiaorg/celestia-core@v1.14.0-tm-v0.34.23/consensus/state.go:853 +0x44b\ngithub.com/tendermint/tendermint/consensus.(*State).receiveRoutine(0xc0010dc700, 0x0)\n\t/go/pkg/mod/github.com/celestiaorg/celestia-core@v1.14.0-tm-v0.34.23/consensus/state.go:780 +0x512\ncreated by github.com/tendermint/tendermint/consensus.(*State).OnStart\n\t/go/pkg/mod/github.com/celestiaorg/celestia-core@v1.14.0-tm-v0.34.23/consensus/state.go:379 +0x12d\n: panic",
    "logs": null,
    "gas_wanted": 80000,
    "gas_used": 62131,
    "events": [
      {
        "type": "coin_spent",
        "attributes": [
          {
            "key": "c3BlbmRlcg==",
            "value": "Y2VsZXN0aWExOG1lbHFkNmV0eXZ5aDZ3M3BkMDZkODRleXA5cHU1c2xuN2h5ODU=",
            "index": true
          },
          {
            "key": "YW1vdW50",
            "value": "MjAwMHV0aWE=",
            "index": true
          }
        ]
      },
      {
        "type": "coin_received",
        "attributes": [
          {
            "key": "cmVjZWl2ZXI=",
            "value": "Y2VsZXN0aWExN3hwZnZha20yYW1nOTYyeWxzNmY4NHoza2VsbDhjNWxwbmpzM3M=",
            "index": true
          },
          {
            "key": "YW1vdW50",
            "value": "MjAwMHV0aWE=",
            "index": true
          }
        ]
      },
      {
        "type": "transfer",
        "attributes": [
          {
            "key": "cmVjaXBpZW50",
            "value": "Y2VsZXN0aWExN3hwZnZha20yYW1nOTYyeWxzNmY4NHoza2VsbDhjNWxwbmpzM3M=",
            "index": true
          },
          {
            "key": "c2VuZGVy",
            "value": "Y2VsZXN0aWExOG1lbHFkNmV0eXZ5aDZ3M3BkMDZkODRleXA5cHU1c2xuN2h5ODU=",
            "index": true
          },
          {
            "key": "YW1vdW50",
            "value": "MjAwMHV0aWE=",
            "index": true
          }
        ]
      },
      {
        "type": "message",
        "attributes": [
          {
            "key": "c2VuZGVy",
            "value": "Y2VsZXN0aWExOG1lbHFkNmV0eXZ5aDZ3M3BkMDZkODRleXA5cHU1c2xuN2h5ODU=",
            "index": true
          }
        ]
      },
      {
        "type": "tx",
        "attributes": [
          {
            "key": "ZmVl",
            "value": "MjAwMHV0aWE=",
            "index": true
          },
          {
            "key": "ZmVlX3BheWVy",
            "value": "Y2VsZXN0aWExOG1lbHFkNmV0eXZ5aDZ3M3BkMDZkODRleXA5cHU1c2xuN2h5ODU=",
            "index": true
          }
        ]
      },
      {
        "type": "tx",
        "attributes": [
          {
            "key": "YWNjX3NlcQ==",
            "value": "Y2VsZXN0aWExOG1lbHFkNmV0eXZ5aDZ3M3BkMDZkODRleXA5cHU1c2xuN2h5ODUvMQ==",
            "index": true
          }
        ]
      },
      {
        "type": "tx",
        "attributes": [
          {
            "key": "c2lnbmF0dXJl",
            "value": "ZUdtRWhHNUFtYk1uUUE0MjFzdUM3RERqSE9seFBuNC81b3ZlZHB5YUI0RVpQL0RHc3NYTTEzTnUvZEVPTllBWEJ2dDFuSWpqM2JNOHZiMlEwQmhXdHc9PQ==",
            "index": true
          }
        ]
      }
    ]
  }