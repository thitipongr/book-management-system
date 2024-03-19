let bookshelf = [];

const addNewBook = () => {
  const addNewBookHeader = "เพิ่มหนังสือใหม่";
  const bookName = prompt(addNewBookHeader + "\nกรุณากรอก ชื่อหนังสือ");
  const auther = prompt(addNewBookHeader + "\nกรุณากรอก ผู้เขียน");
  const year = prompt(addNewBookHeader + "\nกรุณากรอก ปีที่พิมพ์");
  const price = prompt(addNewBookHeader + "\nกรุณากรอก ราคา");

  const confirmation = confirm(
    `คุณต้องการเพิ่มหนังสือ \nชื่อ: ${bookName} \nโดย: ${auther} \nของปี: ${year} \nราตา: ${price}`
  );

  if (confirmation) {
    const packData = {
      bookName: bookName,
      auther: auther,
      year: year,
      price: price,
    };

    bookshelf = [...bookshelf, packData];
  }

  main();
};

const main = () => {
  const mainOption = prompt(
    `ยินดีต้องรับเข้าสู่ "ระบบจัดการหนังสือ" \nกรุณาเลือกรายการที่ต้องการ โดยกรอก \n1: เพิ่มหนังสือใหม่ \n2: ดูรายการหนังสือทั้งหมด \n3: แก้ไขหนังสือที่มีอยู่ \n4: ลบหนังสือที่มีอยู่`
  );

  switch (mainOption) {
    case "1": {
      addNewBook();
      break;
    }
    default: {
      alert(
        `กรุณาเลือกรายการที่ต้องการ โดยกรอก \n1: เพิ่มหนังสือใหม่ \n2: ดูรายการหนังสือทั้งหมด \n3: แก้ไขหนังสือที่มีอยู่ \n4: ลบหนังสือที่มีอยู่ \nเท่านั้น!!`
      );
      main();
    }
  }
};

main();
