let adsParents = document.querySelectorAll('.rotator');
let adsParentsArr = Array.from(adsParents);
adsParentsArr.forEach((item) => {
  let ads = item.children;
  let adsArr = Array.from(ads);

  function adRorator() {
    adsArr[i].classList.remove('rotator__case_active');
    if (i < adsArr.length - 1) {
      adsArr[i+1].classList.add('rotator__case_active');
      i += 1;
    } else {
      adsArr[0].classList.add('rotator__case_active');
      i = 0;
    }
  }

  let i = 0;
  setInterval(() => adRorator(), 1000);
});
