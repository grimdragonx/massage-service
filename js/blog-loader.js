(function () {
  const articles = {
    id: {
      'massage-relaxation': {
        title: 'Manfaat Pijat Relaksasi untuk Kesehatan',
        description: 'Pelajari manfaat pijat relaksasi untuk kesehatan tubuh dan pikiran Anda.',
        content: [
          'Pijat relaksasi membantu menurunkan ketegangan otot dan membuat tubuh terasa lebih ringan setelah aktivitas harian.',
          'Tekanan yang tepat juga membantu melancarkan sirkulasi darah sehingga suplai oksigen ke jaringan tubuh menjadi lebih baik.',
          'Selain manfaat fisik, sesi pijat yang teratur dapat membantu menurunkan stres dan meningkatkan kualitas tidur.'
        ]
      },
      'reflexology-basics': {
        title: 'Mengenal Refleksi dan Manfaatnya untuk Tubuh',
        description: 'Teknik refleksi dapat membantu pemulihan tubuh dan mengurangi rasa lelah.',
        content: [
          'Refleksi bekerja dengan memberikan tekanan pada titik-titik tertentu, terutama pada area kaki dan tangan.',
          'Terapi ini sering dipilih untuk membantu meredakan pegal, meningkatkan rasa nyaman, dan membantu relaksasi.',
          'Jika dilakukan oleh terapis berpengalaman, refleksi bisa menjadi bagian penting dari perawatan kebugaran rutin Anda.'
        ]
      }
    },
    en: {
      'massage-relaxation': {
        title: 'Benefits of Relaxing Massage for Body and Mind',
        description: 'Learn how relaxing massage supports better physical and mental wellness.',
        content: [
          'Relaxing massage helps reduce muscle tension and makes the body feel lighter after daily activities.',
          'Proper massage pressure can also improve blood circulation, supporting better oxygen delivery throughout the body.',
          'Beyond physical benefits, regular massage sessions may lower stress levels and improve sleep quality.'
        ]
      },
      'reflexology-basics': {
        title: 'Reflexology Basics: Why It Helps You Recover Faster',
        description: 'Reflexology can help reduce fatigue and support better recovery.',
        content: [
          'Reflexology focuses on pressure points, commonly in the feet and hands, to stimulate relaxation responses.',
          'Many clients choose reflexology to ease discomfort, reduce fatigue, and improve overall comfort.',
          'When performed by trained therapists, reflexology can be a strong addition to your regular wellness routine.'
        ]
      }
    }
  };

  function getLang() {
    const params = new URLSearchParams(window.location.search);
    const queryLang = params.get('lang');
    if (queryLang === 'en' || queryLang === 'id') return queryLang;
    return window.location.pathname.includes('/en/') ? 'en' : 'id';
  }

  function loadArticle() {
    const params = new URLSearchParams(window.location.search);
    const articleKey = params.get('article') || 'massage-relaxation';
    const lang = getLang();
    const contentSection = document.querySelector('.blog-post-content');
    if (!contentSection) return;

    const article = articles[lang] && articles[lang][articleKey];
    if (!article) {
      contentSection.innerHTML = lang === 'en'
        ? '<h1>Article Not Found</h1><p>Sorry, the article you requested is not available.</p>'
        : '<h1>Artikel Tidak Ditemukan</h1><p>Maaf, artikel yang Anda cari tidak tersedia.</p>';
      return;
    }

    document.title = article.title + ' | Salsabila Spa';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', article.description);

    const paragraphs = article.content.map((item) => '<p>' + item + '</p>').join('');
    contentSection.innerHTML = '<h1>' + article.title + '</h1>' + paragraphs;
  }

  window.addEventListener('DOMContentLoaded', loadArticle);
})();

