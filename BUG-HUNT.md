# ລ່າ Bug ໃນຮ້ານ Lao Handmade · Shop Bug Hunt

ຮ້ານຄ້າຈາກ Lab 2 ຖືກເພີ່ມກະຕ່າສິນຄ້າແລ້ວ — ແຕ່ມີ **8 bug**. ເຮັດເປັນຄູ່ ແລ້ວແກ້ໃຫ້ໝົດ!
The Lab 2 shop now has a cart — and 8 bugs. Work in pairs and fix them all.

## ວິທີເລີ່ມ · Getting started

```
npm install
npm run dev
```

ເປີດ browser ແລ້ວກົດ **F12** ເພື່ອເບິ່ງ console — ມັນຈະບອກຫຼາຍຢ່າງ.

## ກົດ · Rules

1. ແກ້ bug ໃຫ້ອາການຫາຍ = **1 ຄະແນນ**. ອະທິບາຍໃຫ້ອາຈານຟັງວ່າ *ເປັນຫຍັງ* ມັນຜິດ = **+1 ຄະແນນ**.
2. ຢ່າລຶບ ຫຼື ຂຽນໃໝ່ທັງໄຟລ໌. ຊອກຫາແຖວທີ່ຜິດ ແລ້ວແກ້ແຖວນັ້ນ.
3. ບາງ bug ຈະປາກົດຫຼັງຈາກແກ້ bug ກ່ອນໜ້າ — ນັ້ນເປັນເລື່ອງປົກກະຕິ.
4. ຂໍ hint ໄດ້ ແຕ່ເສຍ 1 ຄະແນນ bonus.

## ລາຍການ bug · Bug list

| # | ອາການ · Symptom | ແກ້ແລ້ວ ☐ | ອະທິບາຍແລ້ວ ☐ |
|---|---|---|---|
| 1 | ເປີດ console — ມີ warning ສີແດງສອງແບບ. ຫາໃຫ້ເຈີ ແລະ ແກ້. *(Two red warnings in the console.)* | ☐ | ☐ |
| 2 | ປ້າຍ “ສິນຄ້າໝົດ” ຂຶ້ນຜິດ — ຂຶ້ນທີ່ສິນຄ້າທີ່ຍັງມີ ແຕ່ບໍ່ຂຶ້ນທີ່ສິນຄ້າທີ່ໝົດ. *(Sold-out badge shows on the wrong products.)* | ☐ | ☐ |
| 3 | ກົດ “ເພີ່ມໃສ່ກະຕ່າ” ແຕ່ກະຕ່າບໍ່ປ່ຽນ. *(Add to cart does nothing.)* | ☐ | ☐ |
| 4 | ກົດ “+2” ແຕ່ເພີ່ມພຽງ 1 ຊິ້ນ. *(“+2” only adds 1.)* | ☐ | ☐ |
| 5 | ກົດ ✕ ໃນກະຕ່າ ແຕ່ບໍ່ມີຫຍັງຫາຍ. *(✕ does not remove the item.)* | ☐ | ☐ |
| 6 | ລາຄາລວມບໍ່ຖືກ ເມື່ອຊື້ຫຼາຍຊິ້ນ. *(Total is wrong when quantity > 1.)* | ☐ | ☐ |
| 7 | ກົດ ＋ ໃນກະຕ່າ ແລ້ວຊື່ ແລະ ຮູບຂອງສິນຄ້າຫາຍໄປ. *(＋ in the cart wipes the item's name and picture.)* | ☐ | ☐ |
| 8 | ກົດປຸ່ມໝວດໝູ່ (ເຄື່ອງດື່ມ…) ປຸ່ມປ່ຽນສີ ແຕ່ລາຍການສິນຄ້າບໍ່ປ່ຽນ. *(Category buttons highlight, but the product grid does not filter.)* | ☐ | ☐ |

**ຄູ່ໃດແກ້ໄດ້ 8 ອັນກ່ອນ — ຍົກມື!** · First pair with all 8 fixed, raise your hand!
