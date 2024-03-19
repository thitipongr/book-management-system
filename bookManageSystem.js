let bookshelf = [];

const addNewBook = () => {
  const addNewBookHeader = "เพิ่มหนังสือใหม่";
  const name = prompt(addNewBookHeader + "\nกรุณากรอก ชื่อหนังสือ");
  const auther = prompt(addNewBookHeader + "\nกรุณากรอก ผู้เขียน");
  const year = prompt(addNewBookHeader + "\nกรุณากรอก ปีที่พิมพ์");
  const price = prompt(addNewBookHeader + "\nกรุณากรอก ราคา");

  const confirmation = confirm(
    `คุณต้องการเพิ่มหนังสือ \nชื่อ: ${name} \nโดย: ${auther} \nของปี: ${year} \nราตา: ${price}`
  );

  if (confirmation) {
    const packData = {
      id: bookshelf.length,
      name: name,
      auther: auther,
      year: year,
      price: price,
    };

    bookshelf = [...bookshelf, packData];
  }

  main();
};

const viewAllBook = () => {
  if (bookshelf.length !== 0) {
    const bookList = bookshelf.map((book) => {
      return `\nรหัส: ${book.id} ชื่อ: ${book.name} โดย: ${book.auther} ของปี: ${book.year} ราตา: ${book.price}`;
    });

    alert("รายการหนังสือทั้งหมดในระบบมีดังนี้" + bookList);
  } else {
    alert("ยังไม่มีรายการหนังสือในระบบ");
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
    case "2": {
      viewAllBook();
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
