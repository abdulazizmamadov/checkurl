const whyParagraphs = document.querySelectorAll('.content-list__item-p');
const whySpans = document.querySelectorAll('.content-list__item-span');

// Har bir paragrafga hodisani ulash
whyParagraphs.forEach((paragraph, index) => {
  paragraph.addEventListener('click', () => {
    // Barcha spanlarni asl holatiga qaytarish
    whySpans.forEach(span => span.classList.add('content-list__item-toggle'));
    
    // Faqat mos keluvchi span elementiga klass qo'shish
    if (whySpans[index]) {
      whySpans[index].classList.toggle('content-list__item-toggle');
    }
  });
});


const fqaItems = document.querySelectorAll('.fqa__list-item');
const fqaParagraphs = document.querySelectorAll('.fqa__paragraph');

fqaItems.forEach((fqaItem, index) => {
  fqaItem.addEventListener('click', () => {
    // Barcha paragrafdan "active" klassni olib tashlash
    fqaParagraphs.forEach(paragraph => paragraph.classList.remove('fqa__paragraph-event'));

    // Faqat hozirgi elementga "active" qo'shish
    if (fqaParagraphs[index]) {
      fqaParagraphs[index].classList.toggle('fqa__paragraph-event');
    }
  });
});

