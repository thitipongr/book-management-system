let bookshelf = [
  {
    id: 0,
    name: "mock#1-name",
    auther: "mock#1-auther",
    year: "mock#1-year",
    price: "mock#1-price",
  },
  {
    id: 1,
    name: "mock#2-name",
    auther: "mock#2-auther",
    year: "mock#2-year",
    price: "mock#2-price",
  },
];

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

const editExistingBook = () => {
  if (bookshelf.length !== 0) {
    const bookList = bookshelf.map((book, index) => {
      return `\n (${index + 1}) รหัส: ${book.id} ชื่อ: ${book.name} โดย: ${
        book.auther
      } ของปี: ${book.year} ราตา: ${book.price}`;
    });

    const bookId = prompt(
      "กรุณากรอก รหัสหนังสือ ที่ต้องการแก้ไขจากรายการ" + bookList
    );

    if (bookId !== null) {
      const fineEditBookIndex = bookshelf.findIndex((book) => {
        return book.id == bookId;
      });

      const editBookHeader = "แก้ไขข้อมูลหนังสือ";

      const newName = prompt(
        editBookHeader +
          `กรุณากรอก ชื่อหนังสือใหม่ (เดิม: ${bookshelf[fineEditBookIndex].name})`
      );
      const newAuther = prompt(
        editBookHeader +
          `กรุณากรอก ผู้เขียนใหม่ (เดิม: ${bookshelf[fineEditBookIndex].auther})`
      );
      const newYear = prompt(
        editBookHeader +
          `กรุณากรอก ปีที่พิมพ์ใหม่ (เดิม: ${bookshelf[fineEditBookIndex].year})`
      );
      const newPrice = prompt(
        editBookHeader +
          `กรุณากรอก ราคาใหม่ (เดิม: ${bookshelf[fineEditBookIndex].price})`
      );

      const editConfirm = confirm(
        `ยืนยันการแก้ไขข้อมูลของหนังสือรหัส: ${bookshelf[fineEditBookIndex].id} โดย\nชื่อหนังสือใหม่: ${newName} (เดิม: ${bookshelf[fineEditBookIndex].name})\n ผู้เขียนใหม่: ${newAuther} (เดิม: ${bookshelf[fineEditBookIndex].auther})\nปีที่พิมพ์ใหม่: ${newYear} (เดิม: ${bookshelf[fineEditBookIndex].year})\nราคาใหม่: ${newPrice} (เดิม: ${bookshelf[fineEditBookIndex].price})`
      );

      if (editConfirm) {
        bookshelf[fineEditBookIndex] = {
          id: fineEditBookIndex,
          name: newName,
          auther: newAuther,
          year: newYear,
          price: newPrice,
        };
      }
    }
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
    case "3": {
      editExistingBook();
      break;
    }
    case "00": {
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
