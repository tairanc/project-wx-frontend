(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{NUeF:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.orderClosereason=n.popupData=n.dispatchDelivery=n.payType=n.confimStatus=n.ordersubStatusAndIconMap=n.ordersubStatusMap=n.ordermainStatusAndIconMap=n.ordermainStatusMap=n.asStatus=n.asReminder=n.asProcess=n.groupStatus=n.afterstatusDeal=n.orderType=n.reasonList=n.asTypes=n.cancelOrderMap=n.groupStatusAndIcon=void 0,n.storeIcon=function(t){switch(t){case"icon_biz":return A.default.createElement("img",{src:e("n2/B"),style:{verticalAlign:"-4px",marginRight:"10px"},width:"15",height:"17"});case"icon_self":return A.default.createElement("img",{src:e("thos"),style:{verticalAlign:"-4px",marginRight:"10px"},width:"20",height:"20"});case"icon_good":return A.default.createElement("img",{src:e("f6Rb"),style:{verticalAlign:"-4px",marginRight:"10px"},width:"17",height:"17"});default:return A.default.createElement("img",{src:e("QS0o"),style:{verticalAlign:"-3px",marginRight:"10px"},width:"16",height:"15"})}};var s,c=e("U7vG"),A=(s=c)&&s.__esModule?s:{default:s};n.groupStatusAndIcon={IN_PROCESS:{status:"拼团中",icon:"/src/img/icon/trcOngoing.png"},SUCCESS:{status:"拼团成功",icon:"/src/img/icon/trcSuccess.png"},FAILED:{status:"拼团失败",icon:"/src/img/icon/trcFailure.png"}},n.cancelOrderMap={SUCCESS:"取消成功",NO_APPLY_CANCEL:""},n.asTypes={10:"仅退款",20:"退货退款",EXCHANGING_GOODS:"申请换货"},n.reasonList=[{name:"0",text:"不想买了"},{name:"1",text:"信息填写错误，重新下单"},{name:"2",text:"付款遇到问题"},{name:"3",text:"其他原因"}],n.orderType=["普通订单","零元购","分期购","拼团"],n.afterstatusDeal={10:"售后中",20:"售后完成",30:"售后完成",40:"售后中",50:"售后中",60:"售后关闭",70:"售后关闭",80:"售后关闭",null:"暂无售后"},n.groupStatus={0:"拼团失败",1:"拼团中",2:"拼团成功"},n.asProcess={10:"待审核",20:"售后完成",30:"售后完成",40:"等待商品寄回",50:"等待商家收货",60:"审核未通过",70:"售后关闭",80:"售后关闭"},n.asReminder={10:"您已成功发起售后申请，请耐心等待商家处理",20:"商家已操作退款给您，请注意查收",30:"商家已操作退款给您，请注意查收",40:"商家已通过您的售后申请，请退货并填写物流信息",50:"商家收到退货并验证无误，将操作退款给您",60:"商家未通过您的售后申请，您可以修改申请后再次发起",70:"您已撤销本次售后申请，最多可以在售后保障期内发起3次申请",80:"您因超时未填写物流单号，本次售后申请被撤销，最多可以在售后保障期内发起3次申请"},n.asStatus=["待处理","处理中","已处理","已驳回"],n.ordermainStatusMap={10:"等待付款"},n.ordermainStatusAndIconMap={10:{status:"等待付款",icon:"/src/img/icon/trcUnpaid2.png"},20:{status:"已付款",icon:"/src/img/icon/trcSend2.png"},30:{status:"交易关闭",icon:"/src/img/icon/trcCancel2.png"}},n.ordersubStatusMap={10:"等待付款",20:"已付款",25:"待发货",30:"交易关闭",31:"交易关闭",40:"已发货",50:"交易完成",60:"交易完成"},n.ordersubStatusAndIconMap={10:{status:"等待付款",icon:"/src/img/icon/trcUnpaid2.png"},20:{status:"已付款",icon:"/src/img/icon/trcSend2.png"},25:{status:"待发货",icon:"/src/img/icon/trcSend2.png"},30:{status:"交易关闭",icon:"/src/img/icon/trcCancel2.png"},31:{status:"交易关闭",icon:"/src/img/icon/trcCancel2.png"},40:{status:"已发货",icon:"/src/img/icon/trcWait2.png"},50:{status:"交易完成",icon:"/src/img/icon/trcEvaluation2.png"},60:{status:"交易完成",icon:"/src/img/icon/trcComplete2.png"}},n.confimStatus={10:"待发货",20:"部分发货",30:"已发货"},n.payType={10:"线上支付",20:"线下支付",30:"理财支付"},n.dispatchDelivery={10:"快递",20:"自提"};n.popupData={type:{title:"售后类型",list:[{method:"退货退款",content:"已收到货，需要退还已收到的货物",select:"restore"},{method:"仅退款",content:"无需退货",select:"refund"}],onlylist:[{method:"仅退款",content:"无需退货",select:"refund"}]},reason:{title:"退货原因",list:{restore:[{content:"商品与描述不符",select:1},{content:"商品错发漏发",select:2},{content:"收到商品破损",select:3},{content:"商品质量问题",select:4},{content:"个人原因退货",select:5},{content:"其他",select:6}],refund:[{content:"商品与描述不符",select:1},{content:"商品错发漏发",select:2},{content:"收到商品破损",select:3},{content:"商品质量问题",select:4},{content:"个人原因退货",select:5},{content:"未收到货",select:6},{content:"商品问题已拒签",select:7},{content:"退运费",select:8},{content:"其他",select:9}]}}},n.orderClosereason={10:"用户关闭",20:"平台取消订单",30:"等待付款的订单过付款时间，系统关单",40:"未在指定时间内拼团成功",50:"商品已完成售后"}},QS0o:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAdCAMAAAD8QJ61AAAAhFBMVEUAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzPF5ewFAAAAK3RSTlMAu9Lx4fp4TPcM2Wgf6LJ+VOzNxqxxJRIJ9cvBmY9cRD0xGL+hgzcpzraE/R4OsQAAAQJJREFUKM+NkdlygzAMRUVsJ8bse9gKpFna6v//rzI1zUMM5MzAXNAxlgxoCrSSgWESiWNBoQczZ4UDWLjUgQuaH+zByhEjIHzJXbvgJkxXOvyAFSLdRSUV2NG1BsDD4n/Lk0nsYEKOE13+uhDjDVQA64KLn8DSDQEUB6a2hExCKs8bwiGZZ/0jxKPZWQrzzqceLqwe5uwginniMkWBYanNVh/iiZ6KKKT7GCC/9t+IHdnCufUccyDuDRIpuVXHKH3FQMtaSiwy/T3iYTmtcqqWvz3eTXmfNgcrGX+ObeXA9oRgT+DvCsmewPmOcMUYLDzk8uWyFpnzSvBcNzYCX2EeEL8esRngiYQFBQAAAABJRU5ErkJggg=="},RYNs:function(t,n,e){},f6Rb:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAAgVBMVEUAAAC7Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh0TU65WAAAAKnRSTlMAu8xL+7TyIBfqsHvQLffcnGJeWk89FO6gdDglDQfmulXEq6GPgUMyA29D3FSHAAABM0lEQVQ4y4XT15qDIBAF4FEREI29xLYpm7bz/g+4m4CUbBL/G24OevgGwNKWuR+laeTnZQuvDIKgRsQAz1iITwQDx57iP3QPlhhfip3ESqbCtyrVlOJbVHYO8YMQ/jToCBg6Gusj4c67u/DHshMoCQBOlu3gCFAiHApUMt+RoVLCFldswdfdPYc+pw8Rfu6CEZC1LgQIrkjNj4TnEKh8QbLWxTeHTjyH3voNBa4ozACKgdBNrEvu9ADMGIMNYj9nsuKZB9ZtaKxI117uBcv5Vh+sywDhEnl0Ox0bmH4y50oB65aIvKzjieKiY/BQW5F0mBI09s4jqTdyaiM3mR60HhHLUU32Oh3NMzIqiudZVaA1VJ1cHUwkkKOSc56TkMGz69jqEjS+TfDS3B++SBr526IF4xd5QHFbIXQuYQAAAABJRU5ErkJggg=="},"n2/B":function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAiCAMAAACUYSJFAAAAmVBMVEUAAADHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3n////49u/18ufKt4H+/fvr5M/8+/jm3cTk2r7Wx5zSwZP7+fTy7d/p4cng1rbZzKXYyqHTxJbNu4jItHpnJO/VAAAAHnRSTlMA8erlFKt2SCcJ1sOGbGIEAvexpJlmSkLd075bNzbFgpHdAAAA90lEQVQoz53TyZKCMBCA4Sbsq7jP2j2CoLjr+z/cGIKVIIGy/C85fKdOdYOSlUzYJLFAk+eEKAodryXpbxSgWhD9pIJ8d2ZiN3O28AFsA/sybMChXtdTTvfyk1bPHDmfNbrN6cjfI+VbqRI3iFmGuJEMzUCXgiP+EXIuLi2tCirxoVhSUSla7eiAUvFAO86G0D2tUVVc017qtbxhRiupt/IqlSdVpNW61XuKopeUDSgDe0BtcJvp24nfcQG+ejVMAbwx6hvXa/3downUxVqMocllHWML5b6mTzi1QG0ZKPa5hKdGc7Mxcz6Cbr5jcIu56bKiD8cHpX+stVypkx0S9gAAAABJRU5ErkJggg=="},thos:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAADAFBMVEVHcEz8TlD0M0PmDDH8T1HyL0L/UVPyLkLmDDHnDzLwK0DnDzL9UlTnDzH0M0PwLEDwKj7wKj/zM0P////sHTnpEjT2OUftHjr7SE76Rk3rGDfsGjfvJT3xKkD3O0jxKT/qFDX8SU/uIzz6RE35QUv2Okf5Q0z3PEj2OEbvJj3wJz78TFDsGjjtHTnwKT/4PUn3PEnyLkLyLkHpEjP8S1D8Sk/6Rk7rFzb0MkT6Q0z7R07tHDn5QkzuITvtIDr2N0b1NUXyLED9TVHpFDX+8/TzMEPrFzXxLEDqFzb5QEv4P0r95ej0MUPpETPwKD70NETqGDb3PknsHDj1NkXvJD3zMEL0NEX+5+n8SlDqFjXuIDv0NUXqFTbuIjv5QEr5Qkv1NkbuITzvIjv0MkPoDzL8TVHzL0LqEzTwJT7vIzzyLEHpFDTrGjf5REz//Pz8xMroEDL9S1HtITrxKD/yK0D0SFn4QEv4P0n5goz+5un1XW31QE/92Nz4l6L1e4r6qbHyTGH4ipX6nKT+3N77ho37ucDzV2n7u8L5c335Z3H92d31UWL9UFL+4eT9ztL3Okj+3uDyQlb7RU73eYbwJT3uHzr2N0fzNEf+6OruIj33Okf93+L+8vP5sLn//v75tb73bXr2g5D5n6jzX3L6lZ39vcD7k5r7oan1dYb0ZHX+ys38pKr4kJv4hpD6eH/5dn/9297zWWv2aXj5XGbzOk39wMT93eH5hIz8rrT2YG/919z9xsr7w8n80tf8y9DyQVb6eoP3Ul71S1v2Tlz0PU72QlH+7/DyN0z4d4L4f4rzMkPsGzn+6+z9s7b2kZ72a3n3oK38nqH7fIHyXXLtKUT0h5b6bHH5UVj0OUntHzn8oab5vsbwSmH/9PT5SVH3VmTyX3L4b3r6WGH6tLz3mqXuOFD2cH3vQVn7pqz6anT6cHjzaHr2laLyRlr4SVb3SFT7jJP2hZT8yc77mZ/80db3cn/3kp7zRVf7vcP3Ym/4prD5X2r91Nj7xsz2WmjyR1vXxfY9AAAAE3RSTlMA/NqR2pFQUVLa2v2R/Pza/P38cyYwmQAAA/FJREFUOMtjYBhgwM4k5JAwTUxVziDQy1PFRk3ZTFJCIsLURDvViZGFDaGO1dXHIswhQQOkUr88TiXeMlfZzExCMSICqNKphwdunqGhq0+yf3RwwjRVOXUDrzIVm1zlSWYSQJUm2oWpTj0wM/kdjdJCXSFmzgKa6eVVpgYy00pC0RRoZqoTC1ShQFZWlqHrKQt/sO3qQHcCzVSDqIwwSdVOZYQq1JOXdTcCqQyLTkgAqdT38iyzsVSWBJtpUujkBFXoJy8v62g0o35BdVgw3HagmdcvnT0jYQpyJ1Shpp+enrujsLDwvNmtTRUdne/fvVzfcmtp7zygENhME6hCGaBKWfc1+S7CELB9O5Rxd9VFiO1QhTPBKttOGZUuaFzemt/Xsb5v99IXy9Y9ir93TXkSSCVUYWKmjJaWnnBeV2vT2q87/x2urj74u/PAh9Vbm/OEc4FeklCEKizKVNLU0hKGg4oKBFstVxIYR1CFUbZKSjKab3dOXlPfvmffrm0nTmyr6du9dcfnllebgfEODE+oQnGwytrGyZs2dpeWHqkOSzh69PDBzZ3rW5asBoaSJVyhiLgdUCXCupMnEWzPsnig7TCFIlNtbZV2bfAGgkoXF5fJk4FEOAhMaC4vU4lXU4YqDBIRF7dLzAyR0dQCxlGWkWGoj4VDNDCO5AzUIXEEVahzWuSmuN2uLpCJ3sdcwOBYZSXQxOZmcEqOhyqUBqoUFxfGCgwMgBGvAlUolZMTJKL75uOKlW3/9088fnz69C1HDh3q/tlRsWw5OHeUQRUGSOnoBOk+X1z37Vfr3727er29e2v+fPqxo2ntw/uQfARV6GEONPM0dqtBOU7dAKow0iNAKkdHOG/X/Nq6120N+ydO/N5d9WzhovYNecLBYJVQhQoglVJ3Zoo/fbDwydw9n7582bfn8aLGTaUWN6qiwbkYqjDdOcYtQOrq7Tno9s7JXxKWEGwv1g9VKJoONNMcJLNt7rkVizc2NFStrKt9PBskAsxxwRpiMIWi2QoxHpUXLl85rasrbherFDIFmD5lS7acr5+RfMofmN2hCn1F04Eq3cylpHROW4uIR8VmglKyvGyJI7BksADlYqjCAmNRZ4XsGGAogeJIRLwoNjFkSgZQZRYo3oH5PRqqkBeoEmh7pDlQZc5pXZGpRbFJIaDcIQtMIWnAFMIHVchZAFLp7KxgDowj6SCgmXaxwHykqVUs6w5S6coEVciRAlaZDlQpBbQdGO/AVAc0M0NPXt7d3SjNlR1WnDEDVRYAzQT6PQCkUlfXDpiSgSr99OTdHQ1ZEQUkByc32HaFyEhzKR2gO8XtgPkoM0PTT16Qi32gi3kA+D9ncUJsTfUAAAAASUVORK5CYII="}}]);