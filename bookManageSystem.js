let bookshelf = [];

const addNewBook = () => {
  const addNewBookHeader = "เพิ่มหนังสือใหม่";
  let name = prompt(addNewBookHeader + "\nกรุณากรอก ชื่อหนังสือ");
  if (name !== null) {
    while (name === "") {
      alert("จำเป็นต้องกรอก ชื่อหนังสือ");
      name = prompt(addNewBookHeader + "\nกรุณากรอก ชื่อหนังสือ");
    }
  } else {
    main();
  }

  let auther = prompt(addNewBookHeader + "\nกรุณากรอก ผู้เขียน");
  if (auther !== null) {
    while (auther === "") {
      alert("จำเป็นต้องกรอก ผู้เขียน");
      auther = prompt(addNewBookHeader + "\nกรุณากรอก ผู้เขียน");
    }
  } else {
    main();
  }

  let year = prompt(addNewBookHeader + "\nกรุณากรอก ปีที่พิมพ์");
  if (year !== null) {
    while (!year.match("^[1-9].+[0-9]*$")) {
      alert("จำเป็นต้องกรอก ปีที่พิมพ์ *เป็นตัวเลข ให้ถูกต้อง");
      year = prompt(addNewBookHeader + "\nกรุณากรอก ปีที่พิมพ์");
    }
  } else {
    main();
  }

  let price = prompt(addNewBookHeader + "\nกรุณากรอก ราคา");
  if (price !== null) {
    while (!price.match("^[1-9][0-9]*$")) {
      alert("จำเป็นต้องกรอก ราคา *เป็นตัวเลข ให้ถูกต้อง");
      price = prompt(addNewBookHeader + "\nกรุณากรอก ราคา");
    }
  } else {
    main();
  }

  const confirmation = confirm(
    `คุณต้องการเพิ่มหนังสือ \nชื่อ: ${name.trim()} \nโดย: ${auther.trim()} \nของปี: ${year} \nราตา: ${price}`
  );

  if (confirmation) {
    const packData = {
      id: Number(bookshelf.length ? bookshelf.at(-1).id : 0) + 1,
      name: name,
      auther: auther,
      year: year,
      price: price,
    };

    bookshelf.push(packData);
  }

  main();
};

const viewAllBook = () => {
  if (bookshelf.length !== 0) {
    let bookList = "";

    bookshelf.forEach((book) => {
      bookList += `\nรหัส: ${book.id} ชื่อ: ${book.name} โดย: ${book.auther} ของปี: ${book.year} ราตา: ${book.price}`;
    });

    alert("รายการหนังสือทั้งหมดในระบบมีดังนี้" + bookList);
  } else {
    alert("ยังไม่มีรายการหนังสือใด ๆ ในระบบ");
  }

  main();
};

const editExistingBook = () => {
  if (bookshelf.length !== 0) {
    let bookList = "";

    bookshelf.forEach((book, index) => {
      bookList += `\n (${index + 1}) รหัส: ${book.id} ชื่อ: ${book.name} โดย: ${
        book.auther
      } ของปี: ${book.year} ราตา: ${book.price}`;
    });

    const bookId = prompt(
      "กรุณากรอก รหัสหนังสือ ที่ต้องการแก้ไขจากรายการ" + bookList
    );

    if (bookId !== "") {
      const fineEditBookIndex = bookshelf.findIndex((book) => {
        return book.id == bookId;
      });

      const editBookHeader = "แก้ไขข้อมูลหนังสือ\n";

      const newName = prompt(
        editBookHeader +
          `กรุณากรอก ชื่อหนังสือใหม่ (เดิม: ${bookshelf[fineEditBookIndex].name})`,
        bookshelf[fineEditBookIndex].name
      );
      const newAuther = prompt(
        editBookHeader +
          `กรุณากรอก ผู้เขียนใหม่ (เดิม: ${bookshelf[fineEditBookIndex].auther})`,
        bookshelf[fineEditBookIndex].auther
      );
      const newYear = prompt(
        editBookHeader +
          `กรุณากรอก ปีที่พิมพ์ใหม่ (เดิม: ${bookshelf[fineEditBookIndex].year})`,
        bookshelf[fineEditBookIndex].year
      );
      const newPrice = prompt(
        editBookHeader +
          `กรุณากรอก ราคาใหม่ (เดิม: ${bookshelf[fineEditBookIndex].price})`,
        bookshelf[fineEditBookIndex].price
      );

      const editConfirm = confirm(
        `ยืนยันการแก้ไขข้อมูลของหนังสือรหัส: ${bookshelf[fineEditBookIndex].id} โดย \nชื่อหนังสือใหม่: ${newName} (เดิม: ${bookshelf[fineEditBookIndex].name}) \nผู้เขียนใหม่: ${newAuther} (เดิม: ${bookshelf[fineEditBookIndex].auther}) \nปีที่พิมพ์ใหม่: ${newYear} (เดิม: ${bookshelf[fineEditBookIndex].year}) \nราคาใหม่: ${newPrice} (เดิม: ${bookshelf[fineEditBookIndex].price})`
      );

      if (editConfirm) {
        const packData = {
          id: bookId,
          name: newName,
          auther: newAuther,
          year: newYear,
          price: newPrice,
        };

        bookshelf.splice(fineEditBookIndex, 1, packData);
      }
    }
  } else {
    alert("ยังไม่มีรายการหนังสือใด ๆ ในระบบ");
  }

  main();
};

const deleteExistingBook = () => {
  if (bookshelf.length !== 0) {
    let bookList = "";

    bookshelf.forEach((book, index) => {
      bookList += `\n (${index + 1}) รหัส: ${book.id} ชื่อ: ${book.name} โดย: ${
        book.auther
      } ของปี: ${book.year} ราตา: ${book.price}`;
    });

    const bookId = prompt(
      "กรุณากรอก รหัสหนังสือ ที่ต้องการแก้ไขจากรายการ" + bookList
    );

    if (bookId !== "") {
      const fineDeleteBookIndex = bookshelf.findIndex((book) => {
        return book.id == bookId;
      });

      const deleteBookHeader = "ลบข้อมูลหนังสือ\n";

      const deleteConfirm = confirm(
        deleteBookHeader +
          `ยืนยันการลบข้อมูลของหนังสือรหัส: ${bookshelf[fineDeleteBookIndex].id} ที่ \nชื่อหนังสือ: ${bookshelf[fineDeleteBookIndex].name} \nผู้เขียน: ${bookshelf[fineDeleteBookIndex].auther} \nปีที่พิมพ์: ${bookshelf[fineDeleteBookIndex].year} \nราคา: ${bookshelf[fineDeleteBookIndex].price}`
      );

      if (deleteConfirm) {
        bookshelf.splice(fineDeleteBookIndex, 1);
      }
    }
  } else {
    alert("ยังไม่มีรายการหนังสือใด ๆ ในระบบ");
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
    case "4": {
      deleteExistingBook();
      break;
    }
    case "00": {
      location.reload();
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
