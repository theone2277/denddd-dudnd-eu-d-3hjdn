module.exports = {
  config: {
    name: "18+",
    version: "1.0",
    author: "Sarkar",
    credit: "Upen",
    countDown: 5,
    role: 1,
    shortDescription: "send you pic of Nsfw",
    longDescription: "",
    category: "NSFW",
    guide: "{pn}"
  },

  onStart: async function ({ message }) {
   var link = [
"https://i.postimg.cc/wTJNSC1G/E-B9ea-WQAAst-Yg.jpg",
"https://i.postimg.cc/sgrWyTSD/E-B9eb-AWUAINyt-B.jpg",
"https://i.postimg.cc/TYcj48LJ/E02i-P-q-XIAE62tu.jpg",
"https://i.postimg.cc/MpK0ks12/E02i-P-w-WYAEbvgg.jpg",
"https://i.postimg.cc/k5LWbqzq/E02i-P-x-XIAAy-K2k.jpg",
"https://i.postimg.cc/C5R1Hqq2/E067-KUr-VIAYK-4-R.jpg",
"https://i.postimg.cc/v8KD80Rw/E067-KUs-Uc-AM2jri.jpg",
"https://i.postimg.cc/xCJD6y6L/E07-FXgt-UYAAp-Qn-S.jpg",
"https://i.postimg.cc/q77d3dnb/E07-FXgu-Uc-AQB1-RK.jpg",
"https://i.postimg.cc/pXPcTJKk/E08z-UBs-Xo-AMh-F2-F.jpg",
"https://i.postimg.cc/wBR0Pfdx/E08z-UBu-WUAMx-KL8.jpg",
"https://i.postimg.cc/3RWbK8ph/E0cw-VJp-Vo-AMw8g-C.jpg",
"https://i.postimg.cc/250KRb1T/E0cw-VJr-UYAAvdpk.jpg",
"https://i.postimg.cc/7LHWWMZf/E0iwcu-XUYAIk-OOs.jpg",
"https://i.postimg.cc/rwLbSL6G/E0iwcu-XVUAAEUC.jpg",
"https://i.postimg.cc/qRYDqPX3/E0-JLpim-XMAMNpcx.jpg",
"https://i.postimg.cc/kgFHsh90/E0-JLpio-XIAAg-Xm9.jpg",
"https://i.postimg.cc/44qjx9BS/E0-JOIXn-WYAQht-Ed.jpg",
"https://i.postimg.cc/MKBNMpLK/E0-JOIXq-Xo-AMY0w-F.jpg",
"https://i.postimg.cc/mZz6JrBN/E0rf0jh-XIAYVIHN.jpg",
"https://i.postimg.cc/ryBYkLp6/E0rf0jj-Xo-AMG-x-X.jpg",
"https://i.postimg.cc/y8PfcgyB/E0s-Ky-B-WYAESuzb.jpg",
"https://i.postimg.cc/J4jY7dys/E0s-Ky-B9-Xo-AAZBEM.jpg",
"https://i.postimg.cc/ZnsNJmrG/E11dmj-HVg-AIg-At-V.jpg",
"https://i.postimg.cc/DfxLrrtx/E11dmjl-UUAQs-Qhm.jpg",
"https://i.postimg.cc/Zq5wcbwN/E1-BXp7-MVo-Ag-Cp-I.jpg",
"https://i.postimg.cc/4NRw0b8s/E1-BXp7-OVg-AAZVMI.jpg",
"https://i.postimg.cc/mDcVvdf2/E1-Go-Jmx-UUAQ6-Cmu.jpg",
"https://i.postimg.cc/DfXB5YPx/E1-Go-Jmx-VEAEt-Pw-V.jpg",
"https://i.postimg.cc/65Vzx2SR/E1lf-Kh4-VEAMRmp-S.jpg",
"https://i.postimg.cc/D0L6Z8w9/E1lf-Kh6-VIAYBZdy.jpg",
"https://i.postimg.cc/HkB2VGTk/E1qu0k-LVEAcs-Dld.jpg",
"https://i.postimg.cc/zfvkhdfS/E1qu0k-MUc-AEJPwv.jpg",
"https://i.postimg.cc/zBRStVKy/E1-RCTm9-Xo-AEqbv8.jpg",
"https://i.postimg.cc/cCy7V0BX/E1-RCTn-AWQAIt-Bp-E.jpg",
"https://i.postimg.cc/QCQgDw6s/E1v-KZ7q-WQAAZP7h.jpg",
"https://i.postimg.cc/c1wBftdj/E1v-KZ7r-XMAUxu-Tm.jpg",
"https://i.postimg.cc/dtDd47Fw/E29-Siqm-WEAYUVQ1.jpg",
"https://i.postimg.cc/mgH9W0hn/E29-Siqm-Xo-Ak-P0ne.jpg",
"https://i.postimg.cc/rwn1qS9d/E2-Ex23-KXEAEsg-Y.jpg",
"https://i.postimg.cc/2514yVH0/E2-Ex23-TXIAE-sne.jpg",
"https://i.postimg.cc/NFcTdbQn/E2g-0ed-Xo-AET0yb.jpg",
"https://i.postimg.cc/KjDTwLz8/E2g-0ef-WYAAh3le.jpg",
"https://i.postimg.cc/zDCTymjY/E2-Wub-N1-WEAAZ6f-M.jpg",
"https://i.postimg.cc/L6mLfyCY/E2-Wub-N3-WQAMAq-E2.jpg",
"https://i.postimg.cc/CKnqY91t/E2zceu8-XIAUxxg-Z.jpg",
"https://i.postimg.cc/kgpb07nK/E2zcev-GXw-AE7a0d.jpg",
"https://i.postimg.cc/pTqhBv1m/E31j-E9f-XMAEh-GLW.jpg",
"https://i.postimg.cc/N0vHspHj/E31j-E9g-XIAQZ-VM.jpg",
"https://i.postimg.cc/hG87fTLb/E32-Bx-EOVk-Ao-z64.jpg",
"https://i.postimg.cc/76xJ7hXv/E32-Bx-EPVUAE9-W89.jpg",
"https://i.postimg.cc/gj7xfDpd/E36pnk-Vc-AMvnb2.jpg",
"https://i.postimg.cc/5yyH7rZn/E36pnk7-Vo-AQwv7-S.jpg",
"https://i.postimg.cc/FFCkd9Lq/E36pnk9-UUAY7-DB0.jpg",
"https://i.postimg.cc/KvQL5nw9/E3aa-EGf-VIAIOWVx.jpg",
"https://i.postimg.cc/x1CmpXS9/E3aa-EGf-Vk-AEu-8-U.jpg",
"https://i.postimg.cc/V6ybN40N/E3-Ev8zh-Xw-AAi-Icl.jpg",
"https://i.postimg.cc/d18ZZdGj/E3-Ev8zo-XMAMf-4t.jpg",
"https://i.postimg.cc/1XsnGtHh/E3g-Gz-Qt-Uc-AMs-Bf4.jpg",
"https://i.postimg.cc/j2cWZbgW/E3g-Gz-Qt-VIAQYj-Nv.jpg",
"https://i.postimg.cc/3xVkL9BZ/E3p-Wu-Xb-XIAI-Jn-R.jpg",
"https://i.postimg.cc/8PyJvTf9/E3p-Wu-XZXMAEc-Kc-F.jpg",
"https://i.postimg.cc/TPbpBmNv/E3-SHCr-XWYAEXRLv.jpg",
"https://i.postimg.cc/qRdzrRWh/E3-SHCr-YX0-AAvxyv.jpg",
"https://i.postimg.cc/brmJ1Rrk/E3ww8qc-Vk-AUMPk-G.jpg",
"https://i.postimg.cc/J7xGwRx0/E3ww8qd-VUAgem-H.jpg",
"https://i.postimg.cc/Fzrzf6rh/E3ww8qe-Vc-AYZcjx.jpg",
"https://i.postimg.cc/s2JvVyzT/E43-RKf-UVg-AMr0-Ax.jpg",
"https://i.postimg.cc/s2zMdxkB/E43-RKf-WVc-AIRt-Hv.jpg",
"https://i.postimg.cc/gkfwsN4H/E48bjsr-WUAE5w00.jpg",
"https://i.postimg.cc/x1MX4M4D/E48bjss-X0-AAou-Wg.jpg",
"https://i.postimg.cc/Dw8WdRqZ/E4-C3-sd-Xw-AA9ujr.jpg",
"https://i.postimg.cc/gJqr2pPM/E4-C3-sj-WEAIy-PXt.jpg",
"https://i.postimg.cc/J4htMSYq/E4d5-Mh9-XEAM-py5.jpg",
"https://i.postimg.cc/XYGJydbB/E4d5-Mi-AXw-AAv-QJr.jpg",
"https://i.postimg.cc/CKbxc0dF/E4-KKLu9-UYAg-BCN4.jpg",
"https://i.postimg.cc/rmcFbHt5/E4-KKLu-Uc-AAw9-Oj.jpg",
"https://i.postimg.cc/tT5CHzhw/E4p-UTo7-Vg-AMt-JS6.jpg",
"https://i.postimg.cc/Gtm33sK2/E4p-UTo7-Vo-AAZZEc.jpg",
"https://i.postimg.cc/fTkW6mkq/E4sn-P1a-UUAcf6-Nd.jpg",
"https://i.postimg.cc/v80Hq386/E4sn-P1a-VEAQAJv9.jpg",
"https://i.postimg.cc/sxHjMDHJ/E4-Tu-ORr-XIAYDJk.jpg",
"https://i.postimg.cc/yY56BxZ1/E4-Tu-ORs-WUAAXMIV.jpg",
"https://i.postimg.cc/HL1pcNzF/E4um-Bm-EVk-AUWfzp.jpg",
"https://i.postimg.cc/cJ7dQc5C/E4um-Bm-FVIAIa-Xo-B.jpg",
"https://i.postimg.cc/4x9f3G6z/E4-Zn-Dd-LVg-AI7-Ff-G.jpg",
"https://i.postimg.cc/PxtTK8B4/E4-Zn-Dd-MVEAAg-QQ3.jpg",
"https://i.postimg.cc/zB05QGN1/E4-Zn-Dd-NUYAE9q-NT.jpg",
"https://i.postimg.cc/hvXF38M9/E5-Bai1-MWEAcn-Pr-F.jpg",
"https://i.postimg.cc/Y2DMf086/E5-Bai1-MWUAA18q-R.jpg",
"https://i.postimg.cc/VNw8LCL8/E5j-Ks-VEUc-AA3-VIB.jpg",
"https://i.postimg.cc/FRW5ZCbr/E5j-Ks-VGUc-AI5-Vz-O.jpg",
"https://i.postimg.cc/rsRVtL6X/E649-UDn-VEAEDYi-Z.jpg",
"https://i.postimg.cc/xqr0vFYk/E649-UDo-VIAAGMbe.jpg",
"https://i.postimg.cc/Y0TSXCNC/E68py-CSVIAEjvev.jpg",
"https://i.postimg.cc/HxZny2V5/E68py-D-Vg-AAe-AIr.jpg",
"https://i.postimg.cc/YqJ7ZP5j/E6-A1-Hug-XEAURn0i.jpg",
"https://i.postimg.cc/FKxQfH7J/E6-A1-Hui-Xs-AEq-AMs.jpg",
"https://i.postimg.cc/bJNf1ftV/E6-A1-Huk-Xo-AIdoc-K.jpg",
"https://i.postimg.cc/qqWfftZW/E6em-S-EXs-AIt-JXK.jpg",
"https://i.postimg.cc/c48yRmvW/E6em-S-JXEAUEa-KG.jpg",
"https://i.postimg.cc/KYx6yhJc/E6-GH2y-Xo-Asr508.jpg",
"https://i.postimg.cc/CxTymq8q/E6-GH2y9-XMAEk-OSt.jpg",
"https://i.postimg.cc/k5skJYpQ/E6o-Pv-Ya-Uc-AAYf-5.jpg",
"https://i.postimg.cc/B6wkDLst/E6o-Pv-YXUc-AIt-Sb6.jpg",
"https://i.postimg.cc/5yYGm4Ng/E6q-Gn-Oq-WQAAej-KA.jpg",
"https://i.postimg.cc/prwSGwmH/E6q-Gn-Ot-XMAc-QHVS.jpg",
"https://i.postimg.cc/ZYWKQ6W7/E6-Upc2k-WYAEpv-D.jpg",
"https://i.postimg.cc/rFWyVcC5/E6-Upc2l-XMAICL4e.jpg",
"https://i.postimg.cc/ry7F2zW8/E6-Upc2r-XIAQH8z4.jpg",
"https://i.postimg.cc/02gxHFRj/E6v-Y7pz-WQAk-Rwt.jpg",
"https://i.postimg.cc/YCRH0S4L/E6v-Y7pz-XMAUIFgk.jpg",
"https://i.postimg.cc/t4pb96gH/E6yf-X2-VVEAEVsn-F.jpg",
"https://i.postimg.cc/0NH1GH08/E6yf-X2-WUc-AM4om.jpg",
"https://i.postimg.cc/HWrXtcdH/E722-Mfj-UYAEh1-Xv.jpg",
"https://i.postimg.cc/wxnJ4qjN/E722-Mfk-Vk-AERev-L.jpg",
"https://i.postimg.cc/pTwN4hS4/E7-Ct-Wy-VWYAEABfc.jpg",
"https://i.postimg.cc/XN56FLGb/E7-Ct-Wy-XXs-AQTOCX.jpg",
"https://i.postimg.cc/dt9XmxJz/E7-I0w-PKWEAQe7-d.jpg",
"https://i.postimg.cc/tCHQz6WV/E7-I0w-PQX0-AEees6.jpg",
"https://i.postimg.cc/nLr6LGbN/E7-IS7-D8-XIAIfb1z.jpg",
"https://i.postimg.cc/6p3HV6jv/E7-IS7-Dp-Xs-AQ8f34.jpg",
"https://i.postimg.cc/nz7SsddS/E7-IS7-Dy-WUAMTBQI.jpg",
"https://i.postimg.cc/bvZBPY1h/E7-M65-O-WYAEZr-Tm.jpg",
"https://i.postimg.cc/4xBDZFMz/E7-M65-O-WQAE8hv8.jpg",
"https://i.postimg.cc/wTFfsRVz/E7-M65-PAWEAAzxa-K.jpg",
"https://i.postimg.cc/fRJKt2y7/E7qj-TRMXIAEi-Go-F.jpg",
"https://i.postimg.cc/gkpQhWbV/E7qj-TRQWYAIiry-Q.jpg",
"https://i.postimg.cc/SR6PPZCY/E7-Qt878-Vo-AQw1-YV.jpg",
"https://i.postimg.cc/W1WHxqF8/E7-Qt879-UYAQj2-Lr.jpg",
"https://i.postimg.cc/W1by9w3t/E7-WOczc-XEAAZ7bi.jpg",
"https://i.postimg.cc/1zbY3xKN/E7-WOczk-WUAY1-H28.jpg",
"https://i.postimg.cc/Bb0Y2xkS/E7yv7-G-WQAA7-C4c.jpg",
"https://i.postimg.cc/tJNrksGh/E7yv7-HAXs-AAqwe-M.jpg",
"https://i.postimg.cc/T2VHf45p/E7yv7-HBWEAENYpa.jpg",
"https://i.postimg.cc/CxX4jGn3/E8-t6uk-Vc-AQf-Ub-P.jpg",
"https://i.postimg.cc/R0tLGWcN/E8-t6u-WVEAANWhl.jpg",
"https://i.postimg.cc/G21JfbQz/E8-t6u-WVk-AANMDK.jpg",
"https://i.postimg.cc/gk6jx3dX/E81-KDNQXo-AUm5-WV.jpg",
"https://i.postimg.cc/T3MwghYk/E81-KDNRXEAc-Vve-Z.jpg",
"https://i.postimg.cc/pTNqtf2f/E8e-KMDCVc-AEGu-IX.jpg",
"https://i.postimg.cc/V6j4sJ63/E8e-KMDCVk-AIUd-YE.jpg",
"https://i.postimg.cc/L52DJmgh/E8e-KMDDUc-AAAu-RO.jpg",
"https://i.postimg.cc/zv7jW4T7/E8-Fy-X5-NWQAMyy-WS.jpg",
"https://i.postimg.cc/VsW4302t/E8-Fy-X5-OXo-AIQl-FC.jpg",
"https://i.postimg.cc/4N4wZNTS/E8q68a-TUYAQOWw-G.jpg",
"https://i.postimg.cc/15WBzhm5/E8q68a-TVo-AIx7pv.jpg",
"https://i.postimg.cc/sX99dbHz/E8-Uzx-C4-WUAEQ2l-N.jpg",
"https://i.postimg.cc/fWCjHn0j/E8-Uzx-C4-WYAYSh-HS.jpg",
"https://i.postimg.cc/Prqb93WG/E8-Uzx-C6-Xs-AATh2-Z.jpg",
"https://i.postimg.cc/Nj604YKQ/E93-Rq-VGUUAEAH8e.jpg",
"https://i.postimg.cc/k57gYZSK/E93-Rq-VHVQAM5hqy.jpg",
"https://i.postimg.cc/FRRsNLDK/E93-Rq-VIVIAEgh-i.jpg",
"https://i.postimg.cc/HxhWxkh9/E93-Rq-VJVk-AMKq-DQ.jpg",
"https://i.postimg.cc/k5wX0cNZ/E99z-Q92-UYAQSAI8.jpg",
"https://i.postimg.cc/BbmTtHGw/E9-CGBu-TVEAE20-Lu.jpg",
"https://i.postimg.cc/15Y0QGB8/E9-CGBu-TVUAMt3a1.jpg",
"https://i.postimg.cc/Sx26Nn1D/E9-CGBu-VUc-AExri-S.jpg",
"https://i.postimg.cc/GmWkBbZr/E9-Igg-S0-WUAQ5-Own.jpg",
"https://i.postimg.cc/NM4TPmLf/E9-Igg-S0-XEAIy-Uc-T.jpg",
"https://i.postimg.cc/HxHX2BYh/E9-Igg-Su-WEAMps-n.jpg",
"https://i.postimg.cc/LsjjLrpP/E9-Ozc9-VVIAQ9-Rqh.jpg",
"https://i.postimg.cc/3NxpMNDj/E9-Ozc9-WUUAUdy8q.jpg",
"https://i.postimg.cc/9fXqwzJ6/Ey2-y-Kh-Vg-AAAPHo.jpg",
"https://i.postimg.cc/JnGDKvwK/Ey2-y-Ki-U8-AQy-Vs-X.jpg",
"https://i.postimg.cc/Px9L7yTH/Ey69h8-IXAAAu-RK0.jpg",
"https://i.postimg.cc/J0XyCXzk/Ey69h8-LXMAER-iu.jpg",
"https://i.postimg.cc/7YvGMKKM/Eydllu-JVg-AQxn-w.jpg",
"https://i.postimg.cc/BQx8h2yW/Eydllu-KUYAMuy1-G.jpg",
"https://i.postimg.cc/rwMD7KXD/Eydllu-KVc-AAw-THB.jpg",
"https://i.postimg.cc/6pc8KttY/Eydllu-LVc-AMIYDj.jpg",
"https://i.postimg.cc/vmmcHkmM/Eyo-BLV9-XIAIl-WXp.jpg",
"https://i.postimg.cc/0NHr6n6S/Eyo-BLWFXAAEzdbg.jpg",
"https://i.postimg.cc/RF6hwtfD/Eyo-BLWGWg-Ak-YGA7.jpg",
"https://i.postimg.cc/gJCJs0Hk/Eyqi-JYr-U8-AY-DHS.jpg",
"https://i.postimg.cc/sx52NRTP/Eyqi-JYs-UYAAx5j-B.jpg",
"https://i.postimg.cc/Vst56jzS/Eyqi-JYt-Vo-AYm-Jq-Y.jpg",
"https://i.postimg.cc/KvyjgRY0/Eys-M-b-WU8-AMd-OCP.jpg",
"https://i.postimg.cc/7YM61wGw/Eys-M-b-XU4-A4-MOm-H.jpg",
"https://i.postimg.cc/kgJ5fzK8/Eys-M-b-ZVo-AMhy-BR.jpg",
"https://i.postimg.cc/mgmgqjyn/Eys-TRVk-U8-AEZVX.jpg",
"https://i.postimg.cc/KY48yT98/Eys-TRVm-Vc-AQL65d.jpg",
"https://i.postimg.cc/rpbFypbC/Eys-TRVn-Vg-AITq-N3.jpg",
"https://i.postimg.cc/MHJ6RFzn/Eyv0xv9-WEAENl-E1.jpg",
"https://i.postimg.cc/50C9XVWc/Eyv0xv-Wg-AIr-Vib.jpg",
"https://i.postimg.cc/Fzb9xVKD/Eyv0xw-CWQAU-18-E.jpg",
"https://i.postimg.cc/28mjSMHJ/Eyvy-THb-WEAMtsmm.jpg",
"https://i.postimg.cc/dQGtvw9r/Eyvy-THVW8-AAhe-Gx.jpg",
"https://i.postimg.cc/X78jGLmv/Eyvy-THZWYAEr9-WO.jpg",
"https://i.postimg.cc/mggbQMWy/Eyzv-Qce-VIAMZuh8.jpg",
"https://i.postimg.cc/htZKMjSW/Eyzv-Qce-VIAQ2-PWY.jpg",
"https://i.postimg.cc/9f4CkhM4/Eyzv-Qce-Vo-AANCp.jpg",
"https://i.postimg.cc/Z5xdq6FP/Ey-iosr-WEAE3-RZ4.jpg",
"https://i.postimg.cc/mrd1YRnt/Ey-iosr-Wg-AAWJ1v.jpg",
"https://i.postimg.cc/8kdD9w1b/Ez04j-E3-UUAkbq-Jx.jpg",
"https://i.postimg.cc/xT0Y2H8V/Ez04j-E3-UYAYXSx4.jpg",
"https://i.postimg.cc/gjKWhcM7/Ez1-JOts-VEAMvd-WO.jpg",
"https://i.postimg.cc/qqrrg6Gn/Ez1-JOtv-VUAck-A-V.jpg",
"https://i.postimg.cc/3xNTyT2L/Ez6rm-X2-WQAAy7-MT.jpg",
"https://i.postimg.cc/0NJ1f0WD/Ez6rm-X8-WYAEAABV.jpg",
"https://i.postimg.cc/rFQTFmR0/Ez-Bn-DD0-XIAIKz35.jpg",
"https://i.postimg.cc/26QRp8f5/Ez-Bn-DDe-WUAk4ray.jpg",
"https://i.postimg.cc/7ZRy0WVq/Ez-Ff-KJBW8-AAQXRk.jpg",
"https://i.postimg.cc/0QRRHKF3/Ez-Ff-KJFW8-Ack63d.jpg",
"https://i.postimg.cc/Y0tctKpz/Ezff-Pe2-XMAAO1-Kq.jpg",
"https://i.postimg.cc/Vvgx6GvQ/Ezff-Pew-WUAATOi6.jpg",
"https://i.postimg.cc/Ghh0NCgc/Ez-Gyact-WUAAc-AKK.jpg",
"https://i.postimg.cc/Cxz3h4VX/Ez-Gyact-XAAIELRl.jpg",
"https://i.postimg.cc/sD6FCNb5/Ez-Gyacu-WUA04-Jco.jpg",
"https://i.postimg.cc/zvzQ9Cjd/Ezl-BESu-UUAg-SEOm.jpg",
"https://i.postimg.cc/cL2Vr8xH/Ez-LWUgm-UUAIss-LL.jpg",
"https://i.postimg.cc/VNt2MLvF/Ez-LWUgn-VIAYTYQs.jpg",
"https://i.postimg.cc/fLhpvn0Q/Ezpeyyp-WUAAILh-F.jpg",
"https://i.postimg.cc/vBLjqqWg/Ezpeyyr-WQAIRNq-A.jpg",
"https://i.postimg.cc/T20FnsdB/Ez-QJa-SUVIAk-Rvzp.jpg",
"https://i.postimg.cc/vHSKN66z/Ez-QJU04-UUAUKZ-4.jpg",
"https://i.postimg.cc/Bbmzsj7J/Ezqvtjx-Vc-AQa3-D4.jpg",
"https://i.postimg.cc/YqSVRxj0/Ezqvtjx-Vo-AMFg-Ql.jpg",
"https://i.postimg.cc/6p2PJ5rN/Ez-Rbn-Db-Vk-AQm-GXU.jpg",
"https://i.postimg.cc/htk5SWsQ/Ez-Rbn-Dx-UUAM33r-A.jpg",
"https://i.postimg.cc/Bv2wbY7Y/Ez-ZTBlg-UUAQBt0s.jpg",
"https://i.postimg.cc/zBjtSLrT/Ez-ZTBlg-Vk-AEUMQ7.jpg",
"https://i.postimg.cc/CKWSTQBc/Ez-X46p-WYAg-YB2-V.jpg",
"https://i.postimg.cc/DZLF2P1n/Ez-X46q-X0-Aw5-Xr-E.jpg",
"https://i.postimg.cc/hjgZdLHS/in-CJm-Ta-UTZ82k-Y7-M.jpg",
"https://i.postimg.cc/J0zTT1rv/w8h4-Ww2-Cp1-Nf-X-V.jpg",
"https://i.postimg.cc/vT9Rsrxf/83aa9-KHISt1ul2-Qd.jpg",
"https://i.postimg.cc/G260V7tb/bw8-RV3j2b-w-Y7-Fy-K.jpg",
"https://i.postimg.cc/Z5Dh65m9/E-A2qdx-UUAEb-Co7.jpg",
"https://i.postimg.cc/PqpnynfS/E-A2qdy-Vk-AEZ-pi.jpg",
"https://i.postimg.cc/XJ9SMKCF/E-A2qe-VEAAYfkb.jpg",
"https://i.postimg.cc/J0cLX37m/E-HD1-A0-Vg-AMC7-TO.jpg",
"https://i.postimg.cc/NfDtfxPk/E-HD1-A1-UUAEQg-C5.jpg",
"https://i.postimg.cc/mrvf6ptB/E-LT6-Lu-VIAgd-sp.jpg",
"https://i.postimg.cc/3NZsNK9x/E-LT6-Lv-VUAAUL2-Q.jpg",
"https://i.postimg.cc/G3JwqQrn/E-LT6-QSVEAMn-G8.jpg",
"https://i.postimg.cc/RVgrzZNP/E-Mfat9-VQAUa-Li6.jpg",
"https://i.postimg.cc/RVSr8HV6/E-Mfay-IVc-AEu-IBS.jpg",
"https://i.postimg.cc/FKJwcbGq/E-Mfay-QVg-AA-8-U8.jpg",
"https://i.postimg.cc/PrrcKn21/E-Mo-ICy-Vc-AQ72-W4.jpg",
"https://i.postimg.cc/DyTfz0fn/E242k-Gb-UUAQ1-Ta.jpg",
"https://i.postimg.cc/BQBSP3tD/E242k-Gc-VIAM4ti7.jpg",
"https://i.postimg.cc/dVQq8fTf/E242k-K4-UYAAwp-Qy.jpg",
"https://i.postimg.cc/bJSYZ22N/E242k-Kw-VEAYw5lh.jpg",
"https://i.postimg.cc/MZjJVS3H/E2-ATWx-KVo-AUYj-Rv.jpg",
"https://i.postimg.cc/65JJhmF0/E2-ATWx-LVo-AQym-Z0.jpg",
"https://i.postimg.cc/CLGyr4gV/E2z-WWD-UYAE-l-OG.jpg",
"https://i.postimg.cc/NjB33rs2/E2z-WWD7-UYAg-x-V0.jpg",
"https://i.postimg.cc/YSSJ9Kmp/E2z-WWD7-VIAECAm-J.jpg",
"https://i.postimg.cc/kgs0qXG1/E2z-WWG3-UUAIbl2-F.jpg",
"https://i.postimg.cc/GtsRp0VB/E39vj-BBVc-AE4u1-L.jpg",
"https://i.postimg.cc/0rRsMW1V/E39vj-BEUc-AMM7z-K.jpg",
"https://i.postimg.cc/056KSzqS/E39vj-Cf-Vc-AARzrc.jpg",
"https://i.postimg.cc/ZY1BxJTM/E39vj-D-VIAI9vu-B.jpg",
"https://i.postimg.cc/WbgD9xzb/E48-YE6-OUYAI35j-V.jpg",
"https://i.postimg.cc/25c3bDcT/E48-YE6-PUYAI4f-WM.jpg",
"https://i.postimg.cc/T3cKxmnz/E48-YE7u-VIAA4yyj.jpg",
"https://i.postimg.cc/PqF0v3m1/E4-Kj-AU6-Vk-A8t-RR0.jpg",
"https://i.postimg.cc/wvyZXXVZ/E4-Kj-AXd-VUAUipwn.jpg",
"https://i.postimg.cc/VLcptbbZ/E4-Kj-AXXVc-Asf2s-S.jpg",
"https://i.postimg.cc/2jWg3x3B/E4-Kj-AXYVc-AM-5-Z6.jpg",
"https://i.postimg.cc/FHTBwWCw/E4ng-Ad-RVo-AMC2-Yz.jpg",
"https://i.postimg.cc/50hGnXK0/E4-Pz-HDIUYAI9-OSC.jpg",
"https://i.postimg.cc/SRcP5mHG/E4-Pz-HDJUYAMAy-Wu.jpg",
"https://i.postimg.cc/02d302Yk/E4-Ss-9-Vg-AULd7-J.jpg",
"https://i.postimg.cc/sgjL6dmp/E4-Ss-HUYAI3nu-C.jpg",
"https://i.postimg.cc/rpzPT1vs/E4-Ss-IVk-AAWGA7.jpg",
"https://i.postimg.cc/Hn0SzB7Z/E4-Ss-IVk-AEy-ZQE.jpg",
"https://i.postimg.cc/9fSNQ4hp/E4u4x8-NVUAMvw-Yb.jpg",
"https://i.postimg.cc/Xq6H9TXB/E4u-GXl-XVo-Agpzo-E.jpg",
"https://i.postimg.cc/vBV2gQ8d/E4u-GXl-YVo-AIhotg.jpg",
"https://i.postimg.cc/2jnXC8XQ/E4u-GXm-AVc-AMSznt.jpg",
"https://i.postimg.cc/m2Rpkf00/E4u-GXm-AVk-AMds-Mv.jpg",
"https://i.postimg.cc/XYY2KKNL/E4-Uv1-RDUYAMAh85.jpg",
"https://i.postimg.cc/bwVmmGsh/E4-Uv1-REVo-A00p6k.jpg",
"https://i.postimg.cc/DzWBH2Xb/E4-Uv1-TYVc-Ac-OK4d.jpg",
"https://i.postimg.cc/SKwDpw61/E4x7-KSv-Vo-AIGam9.jpg",
"https://i.postimg.cc/ydcn6vn1/E4x7-KSw-UUAALNVu.jpg",
"https://i.postimg.cc/ZKVHq9Pd/E4x7-KU3-UUAAZo-CE.jpg",
"https://i.postimg.cc/J08xsZdb/E4-Xhhfa-VUAQxt-Tx.jpg",
"https://i.postimg.cc/159MP0FS/E4-Xhhfb-UUAE-HDz.jpg",
"https://i.postimg.cc/nVKT6SCT/E4-Xhhfc-Vo-AEY7qn.jpg",
"https://i.postimg.cc/j2hXP2GB/E4-Z1-VKv-VIAM4-Z6.jpg",
"https://i.postimg.cc/fRyKSw5g/E4-Z1-VNAUYAsh-I87.jpg",
"https://i.postimg.cc/TPWJQCzV/E4-Z1-VNBUUAMRx-Sh.jpg",
"https://i.postimg.cc/1thcdDSL/E4-Z1-VNEUc-AQ96i-D.jpg",
"https://i.postimg.cc/MHk6VKy0/E504e-IMVk-AI7qo2.jpg",
"https://i.postimg.cc/mrtBnFjN/E529-En3-VEAIXAh7.jpg",
"https://i.postimg.cc/cJ20G45q/E529-En4-VIAAe1-Q8.jpg",
"https://i.postimg.cc/0jqvrXsc/E529-En6-VUAkw-W6-Y.jpg",
"https://i.postimg.cc/MT7bJXKX/E5c-DDv-RVIAc1-Q51.jpg",
"https://i.postimg.cc/vTG7YMch/E5c-DDv-RVIAg-JXts.jpg",
"https://i.postimg.cc/xjPysk44/E5c-DDv-SUYAIzph-K.jpg",
"https://i.postimg.cc/ncRKJyZK/E5c-DDz-QVEAg4iju.jpg",
"https://i.postimg.cc/x8gvq7m2/E5-HCoi-QVEAYdf-Nv.jpg",
"https://i.postimg.cc/SNNLHS0N/E5-HCoi-TVk-AAEq-Pg.jpg",
"https://i.postimg.cc/XvF99X5x/E5-HCok-Vg-AE7wnv.jpg",
"https://i.postimg.cc/g2xVkgkC/E5-HCok-VIAA67-ZN.jpg",
"https://i.postimg.cc/PJfZG4RF/E5j-EZ6t-VIAIDy93.jpg",
"https://i.postimg.cc/R0rHC9Yt/E5n-NQLVo-Ag-Gc3o.jpg",
"https://i.postimg.cc/kgLxVW2B/E5v42d-SVk-Ag-Zx-5.jpg",
"https://i.postimg.cc/YCLFwjdk/E5v42d-SVo-AMc-G0-F.jpg",
"https://i.postimg.cc/76wJ79wY/E5v-OWFOUc-AAEq-L3.jpg",
"https://i.postimg.cc/6QdGygsm/E5v-OWFOVIAMTXg-J.jpg",
"https://i.postimg.cc/V626gFcC/E72-BU9k-Vo-AEIq5-F.jpg",
"https://i.postimg.cc/5yvtRFxk/E72-BU9n-Vk-AAm-QHd.jpg",
"https://i.postimg.cc/258VS6wV/E72-BU-u-UYAMPjpl.jpg",
"https://i.postimg.cc/j5D2yFBT/E72-BU-w-UUAIs-A-R.jpg",
"https://i.postimg.cc/rytzm7SC/E82-Of-JXUc-AEGPNr.jpg",
"https://i.postimg.cc/J4V0BKxw/E82-Of-JZVg-AI1rf6.jpg",
"https://i.postimg.cc/JnXmrV9s/E865-Drh-VEA4-Hy4-L.jpg",
"https://i.postimg.cc/fTp35DDP/E8bg-Cq-FVUA0meb5.jpg",
"https://i.postimg.cc/cC5vpNYr/E8-Gvuvt-Vc-AMBiv-A.jpg",
"https://i.postimg.cc/6qQ7bQ8k/E8-Gvuv-ZUc-A8v-do.jpg",
"https://i.postimg.cc/Dy8Jq8ks/E8-Gvuv-ZVk-Ac7j5-N.jpg",
"https://i.postimg.cc/Cx8RQXKx/E8-Gvuv-ZVo-AQB8bc.jpg",
"https://i.postimg.cc/Y2XLGQVM/E8-Lrtu-HUUAIBusl.jpg",
"https://i.postimg.cc/8CV7Q4FB/E8mrcng-VEAMk-Y-2.jpg",
"https://i.postimg.cc/B6SttvBj/E8-MVVk-PVc-AEt-IFz.jpg",
"https://i.postimg.cc/85ZcvVZt/E8r-Rk6w-VUAArw9-D.jpg",
"https://i.postimg.cc/7YGh5d0n/E8-Wf-Zp6-Vc-AIJBI.jpg",
"https://i.postimg.cc/B6pLCFn5/E8-4tch-XIAQFLRx.jpg",
"https://i.postimg.cc/LsBnHPLd/E8-4t-Zo-WYAYLBhh.jpg",
"https://i.postimg.cc/Hswx05vr/E91-f-B3-Vc-AQHy-Sc.jpg",
"https://i.postimg.cc/T3TPtwBC/E91-f-B9-VQAQnua5.jpg",
"https://i.postimg.cc/Dw5wHhTF/E91-f-Ep-Vk-AEZVU.jpg",
"https://i.postimg.cc/cJHLNzx3/E91-f-Er-VUAIqp-O.jpg",
"https://i.postimg.cc/kGxnc3c0/E99pfbs-Vg-AQd5kt.jpg",
"https://i.postimg.cc/mgdTVSYg/E99pfbs-Vk-AU17x2.jpg",
"https://i.postimg.cc/RCfV9KBg/E99pfbt-Vg-AMK5g.jpg",
"https://i.postimg.cc/tJ7Ttmfy/E9bx-KMa-Uc-AAe6r-F.jpg",
"https://i.postimg.cc/hvwGC1Wm/E9e-G1-T8-Vg-AIwj-AA.jpg",
"https://i.postimg.cc/bN7JkgRc/E9e-G1-T9-UYAc-FM5-G.jpg",
"https://i.postimg.cc/L40h62Ys/E9e-PZ-YUYAMt-ZAK.jpg",
"https://i.postimg.cc/13DzHFWg/E9e-PZ-ZVIAU-qpm.jpg",
"https://i.postimg.cc/d0BVMYcw/E9g7q-TCVc-Ag53h2.jpg",
"https://i.postimg.cc/tJ1qVnZ4/E9-H4-Tff-VEAAj-D0w.jpg",
"https://i.postimg.cc/QCRXgN1k/E9-H4-Tfg-VEAk-WZjm.jpg",
"https://i.postimg.cc/YSkCySVd/E9i-Ix9l-Vo-Ac-N0-Al.jpg",
"https://i.postimg.cc/NMjfBzQT/E9ml-GAk-VUAMCun-X.jpg",
"https://i.postimg.cc/k4YM4v5H/E9ml-GAo-VEAAk-Aq.jpg",
"https://i.postimg.cc/L476FDwY/E9ro-PZIUUAIc-Kaz.jpg",
"https://i.postimg.cc/TYD2dmvk/E9ro-PZJVo-AQh5j-Y.jpg",
"https://i.postimg.cc/9QHmrMWc/E9ro-PZKVk-AE5754.jpg",
"https://i.postimg.cc/5txfSRYG/E9ro-PZz-VIAIWh-Xb.jpg",
"https://i.postimg.cc/7Z1x7k60/E9z-UZTPVc-AIbh-T1.jpg",
"https://i.postimg.cc/bJr8KSR9/E9z-UZTPVIAMto-E0.jpg",
"https://i.postimg.cc/1zJsCrDz/E9z-UZTSVIAAVW26.jpg",
"https://i.postimg.cc/RFY99Cs5/E9z-UZTSVQAUPh-Yi.jpg",
"https://i.postimg.cc/YqMkHP8S/EK9-Aa1-KUEAERluy.jpg",
"https://i.postimg.cc/BZxsR3Ty/EK9-Aazd-U4-AAn-RWe.jpg",
"https://i.postimg.cc/dV0Y7TbP/EK9-Aazj-VUAE0-GQ.jpg",
"https://i.postimg.cc/9Q06XH9c/f-b-Mpjec-FRr-M-3-W.jpg",
"https://i.postimg.cc/NFQnW3Yq/fxw-Wt-XHtl-Tr-Fh-Qyw.jpg",
"https://i.postimg.cc/D05NFxyW/hbay-UWXCIHAJYx-WR.jpg",
"https://i.postimg.cc/2StPV9dh/HQlt7u-z-AJJFo-e.jpg",
"https://i.postimg.cc/9MdSgW6Y/ht-D3-Wi-JQM0md-Fc-Ig.jpg",
"https://i.postimg.cc/L6CWbQbw/q1o-DN4-IN-Zd6-K5s7.jpg",
"https://i.postimg.cc/1th2Kgjz/Vbn0-ZPWBu-CB05-j-J.jpg",
"https://i.postimg.cc/J7Qvbzc1/zpbi-Yu-P1-WBTUrc.jpg"
]

let img = link[Math.floor(Math.random()*link.length)]
message.send({
  body: '「 Daddy jerk off 💦🥵 」',attachment: await global.utils.getStreamFromURL(img)
})
}
     }