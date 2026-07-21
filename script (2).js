// Array holding your 17 video filenames or source links
// Modify the strings inside this list to point to your friend's video files
const bhaktamarVideos = [
    "https://ik.imagekit.io/utbkkww14/__%20%E0%A4%AD%E0%A4%95%E0%A5%8D%E0%A4%A4%E0%A4%BE%E0%A4%AE%E0%A4%B0%20%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%8B%E0%A4%A4%E0%A5%8D%E0%A4%B0%20__%E0%A4%95%E0%A4%BE%E0%A4%B5%E0%A5%8D%E0%A4%AF%20-1%20%E0%A4%AD%E0%A4%95%E0%A5%8D%E0%A4%A4%20%E0%A4%85%E0%A4%AE%E0%A4%B0%20%E0%A4%A8%E0%A4%A4%20%E0%A4%AE%E0%A5%81%E0%A4%95%E0%A5%81%E0%A4%9F%20%E0%A4%B8%E0%A5%81-%E0%A4%AE%E0%A4%A3%E0%A4%BF%E0%A4%AF%E0%A5%8B%E0%A4%82,%20%E0%A4%95%E0%A5%80%20%E0%A4%B8%E0%A5%81-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%AD%E0%A4%BE%20%E0%A4%95%E0%A4%BE%20%E0%A4%9C%E0%A5%8B%20%E0%A4%AD%E0%A4%BE%E0%A4%B8%E0%A4%95%20_%20%E0%A4%AA%E0%A4%BE%E0%A4%AA%20%E0%A4%B0%E0%A5%82%E0%A4%AA%20%E0%A4%85%E0%A4%A4%E0%A4%BF%20.mp4",
    "https://ik.imagekit.io/utbkkww14/__%20%E0%A4%AD%E0%A4%95%E0%A5%8D%E0%A4%A4%E0%A4%BE%E0%A4%AE%E0%A4%B0%20%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%8B%E0%A4%A4%E0%A5%8D%E0%A4%B0%20__%E0%A4%95%E0%A4%BE%E0%A4%B5%E0%A5%8D%E0%A4%AF%20-2%20%E0%A4%B8%E0%A4%95%E0%A4%B2%20%E0%A4%B5%E0%A4%BE%E0%A4%99%E0%A5%8D%E0%A4%AE%E0%A4%AF%20%E0%A4%A4%E0%A4%A4%E0%A5%8D%E0%A4%B5%E0%A4%AC%E0%A5%8B%E0%A4%A7%20%E0%A4%B8%E0%A5%87,%20%E0%A4%89%E0%A4%A6%E0%A5%8D%E0%A4%AD%E0%A4%B5%20%E0%A4%AA%E0%A4%9F%E0%A5%81%E0%A4%A4%E0%A4%B0%20%E0%A4%A7%E0%A5%80-%E0%A4%A7%E0%A4%BE%E0%A4%B0%E0%A5%80%20_%E0%A4%89%E0%A4%B8%E0%A5%80%20%E0%A4%87%E0%A4%82%E0%A4%A6%E0%A5%8D%E0%A4%B0%20%E0%A4%95%E0%A5%80%20%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%81%E0%A4%A4%E0%A4%BF%20%E0%A4%B8%E0%A5%87.mp4",
    "https://ik.imagekit.io/utbkkww14/__%20%E0%A4%AD%E0%A4%95%E0%A5%8D%E0%A4%A4%E0%A4%BE%E0%A4%AE%E0%A4%B0%20%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%8B%E0%A4%A4%E0%A5%8D%E0%A4%B0%20__%E0%A4%95%E0%A4%BE%E0%A4%B5%E0%A5%8D%E0%A4%AF%20-%203%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%81%E0%A4%A4%E0%A4%BF%20%E0%A4%95%E0%A5%8B%20%E0%A4%A4%E0%A5%88%E0%A4%AF%E0%A4%BE%E0%A4%B0%20%E0%A4%B9%E0%A5%81%E0%A4%86%20%E0%A4%B9%E0%A5%82%E0%A4%81,%20%E0%A4%AE%E0%A5%88%E0%A4%82%20%E0%A4%A8%E0%A4%BF%E0%A4%B0%E0%A5%8D%E0%A4%AC%E0%A5%81%E0%A4%A6%E0%A5%8D%E0%A4%A7%E0%A4%BF%20%E0%A4%9B%E0%A5%8B%E0%A4%A1%E0%A4%BC%20%E0%A4%95%E0%A5%87%20%E0%A4%B2%E0%A4%BE%E0%A4%9C%20_%E0%A4%B5%E0%A4%BF%E0%A4%9C%E0%A5%8D%E0%A4%9E%E0%A4%9C%E0%A4%A8%E0%A5%8B%E0%A4%82%20%E0%A4%B8%E0%A5%87%20.mp4",
    "https://ik.imagekit.io/utbkkww14/--%20%E0%A4%AD%E0%A4%95%E0%A5%8D%E0%A4%A4%E0%A4%BE%E0%A4%AE%E0%A4%B0%20%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%8B%E0%A4%A4%E0%A5%8D%E0%A4%B0%20--%E0%A4%95%E0%A4%BE%E0%A4%B5%E0%A5%8D%E0%A4%AF%20-%204%E0%A4%B9%E0%A5%87%20%E0%A4%9C%E0%A4%BF%E0%A4%A8!%20%E0%A4%9A%E0%A4%82%E0%A4%A6%E0%A5%8D%E0%A4%B0%E0%A4%95%E0%A4%BE%E0%A4%82%E0%A4%A4%20%E0%A4%B8%E0%A5%87%20%E0%A4%AC%E0%A4%A2%E0%A4%BC%E0%A4%95%E0%A4%B0,%20%E0%A4%A4%E0%A4%B5%20%E0%A4%97%E0%A5%81%E0%A4%A3%20%E0%A4%B5%E0%A4%BF%E0%A4%AA%E0%A5%81%E0%A4%B2%20%E0%A4%85%E0%A4%AE%E0%A4%B2%20%E0%A4%85%E0%A4%A4%E0%A4%BF%20%E0%A4%B6%E0%A5%8D%E0%A4%B5%E0%A5%87%E0%A4%A4%20_%E0%A4%95%E0%A4%B9%20%E0%A4%A8%20%E0%A4%B8%E0%A4%95%E0%A5%87%20%E0%A4%A8.mp4",
    "https://ik.imagekit.io/utbkkww14/__%20%E0%A4%AD%E0%A4%95%E0%A5%8D%E0%A4%A4%E0%A4%BE%E0%A4%AE%E0%A4%B0%20%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%8B%E0%A4%A4%E0%A5%8D%E0%A4%B0__%E0%A4%95%E0%A4%BE%E0%A4%B5%E0%A5%8D%E0%A4%AF%20-%205%E0%A4%B5%E0%A4%B9%20%E0%A4%AE%E0%A5%88%E0%A4%82%20%E0%A4%B9%E0%A5%82%E0%A4%81,%20%E0%A4%95%E0%A5%81%E0%A4%9B%20%E0%A4%B6%E0%A4%95%E0%A5%8D%E0%A4%A4%E0%A4%BF%20%E0%A4%A8%20%E0%A4%B0%E0%A4%96%E0%A4%95%E0%A4%B0,%20%E0%A4%AD%E0%A4%95%E0%A5%8D%E0%A4%A4%E0%A4%BF%20%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%B0%E0%A4%A3%E0%A4%BE%20%E0%A4%B8%E0%A5%87%20%E0%A4%B2%E0%A4%BE%E0%A4%9A%E0%A4%BE%E0%A4%B0%20_%E0%A4%95%E0%A4%B0%E0%A4%A4%E0%A5%80%20%E0%A4%B9%E0%A5%82%E0%A4%81%20%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%81.mp4",
    "https://ik.imagekit.io/utbkkww14/__%20%E0%A4%AD%E0%A4%95%E0%A5%8D%E0%A4%A4%E0%A4%BE%E0%A4%AE%E0%A4%B0%20%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%8B%E0%A4%A4%E0%A5%8D%E0%A4%B0%20__%E0%A4%95%E0%A4%BE%E0%A4%B5%E0%A5%8D%E0%A4%AF%20-%206%E0%A4%85%E0%A4%B2%E0%A5%8D%E0%A4%AA%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A5%81%E0%A4%A4%20%E0%A4%B9%E0%A5%82%E0%A4%81%20%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A5%81%E0%A4%A4%E0%A4%B5%E0%A4%BE%E0%A4%A8%E0%A5%8B%E0%A4%82%20%E0%A4%B8%E0%A5%87,%20%E0%A4%B9%E0%A4%BE%E0%A4%B8%E0%A5%8D%E0%A4%AF%20%E0%A4%95%E0%A4%B0%E0%A4%BE%E0%A4%A8%E0%A5%87%20%E0%A4%95%E0%A4%BE%20%E0%A4%B9%E0%A5%80%20%E0%A4%A7%E0%A4%BE%E0%A4%AE%20_%E0%A4%95%E0%A4%B0%E0%A4%A4%E0%A5%80%20%E0%A4%B9%E0%A5%88%20%E0%A4%B5%E0%A4%BE%E0%A4%9A%E0%A4%BE%E0%A4%B2%20.mp4",
    "https://ik.imagekit.io/utbkkww14/__%20%E0%A4%AD%E0%A4%95%E0%A5%8D%E0%A4%A4%E0%A4%BE%E0%A4%AE%E0%A4%B0%20%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%8B%E0%A4%A4%E0%A5%8D%E0%A4%B0__%E0%A4%95%E0%A4%BE%E0%A4%B5%E0%A5%8D%E0%A4%AF%20-%207%20%E0%A4%9C%E0%A4%BF%E0%A4%A8%E0%A4%B5%E0%A4%B0%20%E0%A4%95%E0%A5%80%20%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%81%E0%A4%A4%E0%A4%BF%20%E0%A4%95%E0%A4%B0%E0%A4%A8%E0%A5%87%20%E0%A4%B8%E0%A5%87,%20%E0%A4%9A%E0%A4%BF%E0%A4%B0%20%E0%A4%B8%E0%A4%82%E0%A4%9A%E0%A4%BF%E0%A4%A4%20%E0%A4%AD%E0%A4%B5%E0%A4%BF%E0%A4%9C%E0%A4%A8%20%E0%A4%95%E0%A5%87%20%E0%A4%AA%E0%A4%BE%E0%A4%AA%20_%E0%A4%AA%E0%A4%B2%E0%A4%AD%E0%A4%B0%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%AD%E0%A4%97%20%E0%A4%9C%E0%A4%BE%E0%A4%A4%E0%A5%87%20.mp4",
    "https://ik.imagekit.io/utbkkww14/__%20%E0%A4%AD%E0%A4%95%E0%A5%8D%E0%A4%A4%E0%A4%BE%E0%A4%AE%E0%A4%B0%20%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%8B%E0%A4%A4%E0%A5%8D%E0%A4%B0%20__%E0%A4%95%E0%A4%BE%E0%A4%B5%E0%A5%8D%E0%A4%AF%20-%208%20%E0%A4%AE%E0%A5%88%E0%A4%82%20%E0%A4%AE%E0%A4%A4%E0%A4%BF%E0%A4%B9%E0%A5%80%E0%A4%A8-%E0%A4%A6%E0%A5%80%E0%A4%A8%20%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%AD%E0%A5%81%20%E0%A4%A4%E0%A5%87%E0%A4%B0%E0%A5%80,%20%E0%A4%B6%E0%A5%81%E0%A4%B0%E0%A5%82%20%E0%A4%95%E0%A4%B0%E0%A5%82%E0%A4%81%20%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%81%E0%A4%A4%E0%A4%BF%20%E0%A4%85%E0%A4%98-%E0%A4%B9%E0%A4%BE%E0%A4%A8%20_%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%AD%E0%A5%81-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%AD%E0%A4%BE%E0%A4%B5%20.mp4",
    "https://ik.imagekit.io/utbkkww14/__%20%E0%A4%AD%E0%A4%95%E0%A5%8D%E0%A4%A4%E0%A4%BE%E0%A4%AE%E0%A4%B0%20%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%8B%E0%A4%A4%E0%A5%8D%E0%A4%B0%20__%E0%A4%95%E0%A4%BE%E0%A4%B5%E0%A5%8D%E0%A4%AF%20-%209%E0%A4%A6%E0%A5%82%E0%A4%B0%20%E0%A4%B0%E0%A4%B9%E0%A5%87%20%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%8B%E0%A4%A4%E0%A5%8D%E0%A4%B0%20%E0%A4%86%E0%A4%AA%E0%A4%95%E0%A4%BE,%20%E0%A4%9C%E0%A5%8B%20%E0%A4%95%E0%A4%BF%20%E0%A4%B8%E0%A4%B0%E0%A5%8D%E0%A4%B5%E0%A4%A5%E0%A4%BE%20%E0%A4%B9%E0%A5%88%20%E0%A4%A8%E0%A4%BF%E0%A4%B0%E0%A5%8D%E0%A4%A6%E0%A5%8B%E0%A4%B7%20_%E0%A4%AA%E0%A5%81%E0%A4%A3%E0%A5%8D%E0%A4%AF-%E0%A4%95%E0%A4%A5%E0%A4%BE%20%E0%A4%B9%E0%A5%80%20%E0%A4%95%E0%A4%BF%E0%A4%A8%E0%A5%8D%E0%A4%A4%E0%A5%81.mp4",
    "https://ik.imagekit.io/utbkkww14/__%20%E0%A4%AD%E0%A4%95%E0%A5%8D%E0%A4%A4%E0%A4%BE%E0%A4%AE%E0%A4%B0%20%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%8B%E0%A4%A4%E0%A5%8D%E0%A4%B0%20__%20%E0%A4%95%E0%A4%BE%E0%A4%B5%E0%A5%8D%E0%A4%AF%20-%2010%20%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A4%BF%E0%A4%AD%E0%A5%81%E0%A4%B5%E0%A4%A8-%E0%A4%A4%E0%A4%BF%E0%A4%B2%E0%A4%95%20%E0%A4%9C%E0%A4%97%E0%A4%A4-%E0%A4%AA%E0%A4%A4%E0%A4%BF%20%E0%A4%B9%E0%A5%87%20%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%AD%E0%A5%81!%20%E0%A4%B8%E0%A4%A6%E0%A5%8D%E0%A4%97%E0%A5%81%E0%A4%B0%E0%A5%81%E0%A4%93%E0%A4%82%20%E0%A4%95%E0%A5%87%20%E0%A4%B9%E0%A5%87%20%E0%A4%97%E0%A5%81%E0%A4%B0%E0%A5%81%E0%A4%B5%E0%A4%B0%E0%A5%8D%E0%A4%AF%20_%E0%A4%B8%E0%A4%A6%E0%A5%8D%E0%A4%AD%E0%A4%95.mp4",
    "https://ik.imagekit.io/utbkkww14/__%20%E0%A4%AD%E0%A4%95%E0%A5%8D%E0%A4%A4%E0%A4%BE%E0%A4%AE%E0%A4%B0%20%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%8B%E0%A4%A4%E0%A5%8D%E0%A4%B0%20__%E0%A4%95%E0%A4%BE%E0%A4%B5%E0%A5%8D%E0%A4%AF%20-%2011%20%E0%A4%B9%E0%A5%87%20%E0%A4%85%E0%A4%A8%E0%A4%BF%E0%A4%AE%E0%A5%87%E0%A4%B7%20%E0%A4%B5%E0%A4%BF%E0%A4%B2%E0%A5%8B%E0%A4%95%E0%A4%A8%E0%A5%80%E0%A4%AF%20%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%AD%E0%A5%81!%20%E0%A4%A4%E0%A5%81%E0%A4%AE%E0%A5%8D%E0%A4%B9%E0%A5%87%E0%A4%82%20%E0%A4%A6%E0%A5%87%E0%A4%96%E0%A4%95%E0%A4%B0%20%E0%A4%AA%E0%A4%B0%E0%A4%AE-%E0%A4%AA%E0%A4%B5%E0%A4%BF%E0%A4%A4%E0%A5%8D%E0%A4%B0%20_%E0%A4%A4%E0%A5%8B%E0%A4%B7%E0%A4%BF%E0%A4%A4%20%E0%A4%B9%E0%A5%8B%E0%A4%A4%E0%A5%87%20%E0%A4%95.mp4",
    "https://ik.imagekit.io/utbkkww14/__%20%E0%A4%AD%E0%A4%95%E0%A5%8D%E0%A4%A4%E0%A4%BE%E0%A4%AE%E0%A4%B0%20%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%8B%E0%A4%A4%E0%A5%8D%E0%A4%B0%20__%E0%A4%95%E0%A4%BE%E0%A4%B5%E0%A5%8D%E0%A4%AF%20-%2012%E0%A4%9C%E0%A4%BF%E0%A4%A8%20%E0%A4%9C%E0%A4%BF%E0%A4%A4%E0%A4%A8%E0%A5%87%20%E0%A4%9C%E0%A5%88%E0%A4%B8%E0%A5%87%20%E0%A4%85%E0%A4%A3%E0%A5%81%E0%A4%93%E0%A4%82%20%E0%A4%B8%E0%A5%87,%20%E0%A4%A8%E0%A4%BF%E0%A4%B0%E0%A5%8D%E0%A4%AE%E0%A4%BE%E0%A4%AA%E0%A4%BF%E0%A4%A4%20%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%AD%E0%A5%81%20%E0%A4%A4%E0%A5%87%E0%A4%B0%E0%A5%80%20%E0%A4%A6%E0%A5%87%E0%A4%B9%20_%E0%A4%A5%E0%A5%87%20%E0%A4%89%E0%A4%A4%E0%A4%A8%E0%A5%87%20%E0%A4%B5%E0%A5%88%E0%A4%B8%E0%A5%87%20%E0%A4%85.mp4",
    "https://ik.imagekit.io/utbkkww14/__%20%E0%A4%AD%E0%A4%95%E0%A5%8D%E0%A4%A4%E0%A4%BE%E0%A4%AE%E0%A4%B0%20%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%8B%E0%A4%A4%E0%A5%8D%E0%A4%B0%20__%E0%A4%95%E0%A4%BE%E0%A4%B5%E0%A5%8D%E0%A4%AF%20-%2013%20%E0%A4%95%E0%A4%B9%E0%A4%BE%E0%A4%81%20%E0%A4%86%E0%A4%AA%E0%A4%95%E0%A4%BE%20%E0%A4%AE%E0%A5%81%E0%A4%96%20%E0%A4%85%E0%A4%A4%E0%A4%BF%E0%A4%B8%E0%A5%81%E0%A4%82%E0%A4%A6%E0%A4%B0,%20%E0%A4%B8%E0%A5%81%E0%A4%B0-%E0%A4%A8%E0%A4%B0%20%E0%A4%89%E0%A4%B0%E0%A4%97%20%E0%A4%A8%E0%A5%87%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A4%B9%E0%A4%BE%E0%A4%B0%E0%A5%80%20_%E0%A4%9C%E0%A4%BF%E0%A4%B8%E0%A4%A8%E0%A5%87%20%E0%A4%9C%E0%A5%80%E0%A4%A4%20%E0%A4%B2%E0%A4%BF%E0%A4%AF%E0%A5%87%20%E0%A4%B8%E0%A4%AC%20.mp4",
    "https://ik.imagekit.io/utbkkww14/__%20%E0%A4%AD%E0%A4%95%E0%A5%8D%E0%A4%A4%E0%A4%BE%E0%A4%AE%E0%A4%B0%20%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%8B%E0%A4%A4%E0%A5%8D%E0%A4%B0%20__%E0%A4%95%E0%A4%BE%E0%A4%B5%E0%A5%8D%E0%A4%AF%20-%2014%20%E0%A4%A4%E0%A4%AC%20%E0%A4%97%E0%A5%81%E0%A4%A3%20%E0%A4%AA%E0%A5%82%E0%A4%B0%E0%A5%8D%E0%A4%A3-%E0%A4%B6%E0%A4%B6%E0%A4%BE%E0%A4%82%E0%A4%95%20%E0%A4%95%E0%A4%BE%20%E0%A4%95%E0%A4%BE%E0%A4%82%E0%A4%A4%E0%A4%BF%E0%A4%AE%E0%A4%AF,%20%E0%A4%95%E0%A4%B2%E0%A4%BE-%E0%A4%95%E0%A4%B2%E0%A4%BE%E0%A4%AA%E0%A5%8B%E0%A4%82%20%E0%A4%B8%E0%A5%87%20%E0%A4%AC%E0%A4%A2%E0%A4%BC%20%E0%A4%95%E0%A5%87%20_%E0%A4%A4%E0%A5%80%E0%A4%A8%20%E0%A4%B2%E0%A5%8B%E0%A4%95%20%E0%A4%AE%E0%A5%87%E0%A4%82.mp4?updatedAt=1784583956817 .mp4",
    "https://ik.imagekit.io/utbkkww14/__%20%E0%A4%AD%E0%A4%95%E0%A5%8D%E0%A4%A4%E0%A4%BE%E0%A4%AE%E0%A4%B0%20%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%8B%E0%A4%A4%E0%A5%8D%E0%A4%B0%20__%E0%A4%95%E0%A4%BE%E0%A4%B5%E0%A5%8D%E0%A4%AF%20-%2013%20%E0%A4%95%E0%A4%B9%E0%A4%BE%E0%A4%81%20%E0%A4%86%E0%A4%AA%E0%A4%95%E0%A4%BE%20%E0%A4%AE%E0%A5%81%E0%A4%96%20%E0%A4%85%E0%A4%A4%E0%A4%BF%E0%A4%B8%E0%A5%81%E0%A4%82%E0%A4%A6%E0%A4%B0,%20%E0%A4%B8%E0%A5%81%E0%A4%B0-%E0%A4%A8%E0%A4%B0%20%E0%A4%89%E0%A4%B0%E0%A4%97%20%E0%A4%A8%E0%A5%87%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A4%B9%E0%A4%BE%E0%A4%B0%E0%A5%80%20_%E0%A4%9C%E0%A4%BF%E0%A4%B8%E0%A4%A8%E0%A5%87%20%E0%A4%9C%E0%A5%80%E0%A4%A4%20%E0%A4%B2%E0%A4%BF%E0%A4%AF%E0%A5%87%20%E0%A4%B8%E0%A4%AC%20.mp4",
    "https://ik.imagekit.io/utbkkww14/__%20%E0%A4%AD%E0%A4%95%E0%A5%8D%E0%A4%A4%E0%A4%BE%E0%A4%AE%E0%A4%B0%20%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%8B%E0%A4%A4%E0%A5%8D%E0%A4%B0%20__%E0%A4%95%E0%A4%BE%E0%A4%B5%E0%A5%8D%E0%A4%AF%20-%2015%20%E0%A4%AE%E0%A4%A6%20%E0%A4%95%E0%A5%80%20%E0%A4%9B%E0%A4%95%E0%A5%80%20%E0%A4%85%E0%A4%AE%E0%A4%B0%20%E0%A4%B2%E0%A4%B2%E0%A4%A8%E0%A4%BE%E0%A4%8F%E0%A4%81,%20%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%AD%E0%A5%81%20%E0%A4%95%E0%A5%87%20%E0%A4%AE%E0%A4%A8%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%A4%E0%A4%A8%E0%A4%BF%E0%A4%95%20%E0%A4%B5%E0%A4%BF%E0%A4%95%E0%A4%BE%E0%A4%B0%20_%E0%A4%95%E0%A4%B0%20%E0%A4%A8%20%E0%A4%B8%E0%A4%95%E0%A5%80%E0%A4%82%20%E0%A4%86%E0%A4%B6%E0%A5%8D%E0%A4%9A.mp4",
    "https://ik.imagekit.io/utbkkww14/__%20%E0%A4%AD%E0%A4%95%E0%A5%8D%E0%A4%A4%E0%A4%BE%E0%A4%AE%E0%A4%B0%20%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%8B%E0%A4%A4%E0%A5%8D%E0%A4%B0%20__%E0%A4%95%E0%A4%BE%E0%A4%B5%E0%A5%8D%E0%A4%AF%20-%2016%E0%A4%A7%E0%A5%82%E0%A4%AE%20%E0%A4%A8%20%E0%A4%AC%E0%A4%A4%E0%A5%8D%E0%A4%A4%E0%A5%80%20%E0%A4%A4%E0%A5%88%E0%A4%B2%20%E0%A4%AC%E0%A4%BF%E0%A4%A8%E0%A4%BE%20%E0%A4%B9%E0%A5%80,%20%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%95%E0%A4%9F%20%E0%A4%A6%E0%A4%BF%E0%A4%96%E0%A4%BE%E0%A4%A4%E0%A5%87%20%E0%A4%A4%E0%A5%80%E0%A4%A8%E0%A5%8B%E0%A4%82%20%E0%A4%B2%E0%A5%8B%E0%A4%95%20_%E0%A4%97%E0%A4%BF%E0%A4%B0%E0%A4%BF%20%E0%A4%95%E0%A5%87%20%E0%A4%B6%E0%A4%BF%E0%A4%96%E0%A4%B0%20%E0%A4%89%E0%A4%A1%E0%A4%BC.mp4",
    "https://ik.imagekit.io/utbkkww14/__%20%E0%A4%AD%E0%A4%95%E0%A5%8D%E0%A4%A4%E0%A4%BE%E0%A4%AE%E0%A4%B0%20%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%8B%E0%A4%A4%E0%A5%8D%E0%A4%B0%20__%E0%A4%95%E0%A4%BE%E0%A4%B5%E0%A5%8D%E0%A4%AF%20-%2017%E0%A4%85%E0%A4%B8%E0%A5%8D%E0%A4%A4%20%E0%A4%A8%20%E0%A4%B9%E0%A5%8B%E0%A4%A4%E0%A4%BE%20%E0%A4%95%E0%A4%AD%E0%A5%80%20%E0%A4%A8%20%E0%A4%9C%E0%A4%BF%E0%A4%B8%E0%A4%95%E0%A5%8B%20,%20%E0%A4%97%E0%A5%8D%E0%A4%B0%E0%A4%B8%20%E0%A4%AA%E0%A4%BE%E0%A4%A4%E0%A4%BE%20%E0%A4%B9%E0%A5%88%20%E0%A4%B0%E0%A4%BE%E0%A4%B9%E0%A5%81%20%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%AC%E0%A4%B2_%E0%A4%8F%E0%A4%95%20%E0%A4%B8%E0%A4%BE%E0%A4%A5%20%E0%A4%AC%E0%A4%A4%E0%A4%B2%E0%A4%BE%E0%A4%A8%E0%A5%87%20%E0%A4%B5.mp4"
];

let currentVerseIndex = 0;

// DOM Elements
const homeScreen = document.getElementById('home-screen');
const videoScreen = document.getElementById('video-screen');
const startBtn = document.getElementById('start-btn');
const homeBtn = document.getElementById('home-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const videoElement = document.getElementById('stotra-video');
const verseNumDisplay = document.getElementById('current-verse-num');
const totalVerseDisplay = document.getElementById('total-verse-num');
const videoContainer = document.querySelector('.video-container');
const videoLoader = document.getElementById('video-loader');
const petalLayer = document.getElementById('petal-layer');
const emberCanvas = document.getElementById('ember-canvas');
const emberCtx = emberCanvas ? emberCanvas.getContext('2d') : null;

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
// GSAP is loaded from a CDN in index.html. If it's ever blocked or slow,
// every gsap.* call below is guarded by this flag so the site still works
// (navigation, video playback) with plain, non-animated fallbacks instead
// of throwing an error and breaking the whole script.
const hasGSAP = typeof window.gsap !== 'undefined';

// Show the REAL total (matches however many videos are actually in the list above),
// so this number stays correct automatically even as more verses get added later
if (totalVerseDisplay) {
    totalVerseDisplay.textContent = bhaktamarVideos.length;
}

/* =========================================================
   GOLDEN EMBER / GLOW PARTICLES (canvas, no external library)
   Continuous field of small floating golden lights that drift
   upward and twinkle — the ambient glow effect from the
   reference clip. Runs behind the flower petals on both screens.
   Independent of GSAP, so it always runs.
   ========================================================= */
let embers = [];

function resizeEmberCanvas() {
    if (!emberCanvas) return;
    emberCanvas.width = window.innerWidth;
    emberCanvas.height = window.innerHeight;
}

function createEmbers(count) {
    if (!emberCanvas) return;
    embers = Array.from({ length: count }, () => ({
        x: Math.random() * emberCanvas.width,
        y: Math.random() * emberCanvas.height,
        radius: 0.8 + Math.random() * 2,
        speedY: 0.12 + Math.random() * 0.3,
        driftX: (Math.random() - 0.5) * 0.35,
        baseAlpha: 0.25 + Math.random() * 0.45,
        twinkleSpeed: 0.4 + Math.random() * 1.1,
        twinklePhase: Math.random() * Math.PI * 2
    }));
}

function drawEmbers(time) {
    if (!emberCtx || !emberCanvas) return;

    emberCtx.clearRect(0, 0, emberCanvas.width, emberCanvas.height);

    embers.forEach((p) => {
        p.y -= p.speedY;
        p.x += p.driftX;

        if (p.y < -10) {
            p.y = emberCanvas.height + 10;
            p.x = Math.random() * emberCanvas.width;
        }
        if (p.x < -10) p.x = emberCanvas.width + 10;
        if (p.x > emberCanvas.width + 10) p.x = -10;

        const twinkle = 0.5 + 0.5 * Math.sin(time * 0.001 * p.twinkleSpeed + p.twinklePhase);
        const alpha = p.baseAlpha * twinkle;

        // soft outer glow
        const glow = emberCtx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 5);
        glow.addColorStop(0, `rgba(255, 210, 120, ${alpha})`);
        glow.addColorStop(1, 'rgba(255, 183, 77, 0)');
        emberCtx.fillStyle = glow;
        emberCtx.beginPath();
        emberCtx.arc(p.x, p.y, p.radius * 5, 0, Math.PI * 2);
        emberCtx.fill();

        // bright core
        emberCtx.fillStyle = `rgba(255, 245, 214, ${Math.min(alpha + 0.25, 1)})`;
        emberCtx.beginPath();
        emberCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        emberCtx.fill();
    });

    requestAnimationFrame(drawEmbers);
}

if (emberCanvas && !prefersReducedMotion) {
    resizeEmberCanvas();
    createEmbers(70);
    requestAnimationFrame(drawEmbers);
    window.addEventListener('resize', () => {
        resizeEmberCanvas();
        createEmbers(70);
    });
}

/* =========================================================
   FLOWER PETAL SYSTEM (GSAP)
   Continuously drops flower petals from the top of the
   screen and lets them drift down, on both the home screen
   and the video screen.
   ========================================================= */
const PETAL_EMOJIS = ['🌸', '🌺', '🌼', '🏵️'];

function spawnPetal() {
    if (!petalLayer || !hasGSAP) return;

    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.textContent = PETAL_EMOJIS[Math.floor(Math.random() * PETAL_EMOJIS.length)];

    const startX = Math.random() * window.innerWidth;
    const size = 14 + Math.random() * 18;
    const fallDuration = 7 + Math.random() * 6;
    const drift = 80 + Math.random() * 140;
    const spin = 180 + Math.random() * 360;

    petal.style.left = `${startX}px`;
    petal.style.fontSize = `${size}px`;
    petal.style.opacity = 0.85;

    petalLayer.appendChild(petal);

    gsap.to(petal, {
        y: window.innerHeight + 80,
        x: `+=${Math.random() > 0.5 ? drift : -drift}`,
        rotation: spin,
        duration: fallDuration,
        ease: 'sine.inOut',
        onComplete: () => petal.remove()
    });

    // gentle side-to-side sway while it falls
    gsap.to(petal, {
        x: `+=${Math.random() > 0.5 ? 30 : -30}`,
        duration: fallDuration / 4,
        yoyo: true,
        repeat: 3,
        ease: 'sine.inOut'
    });
}

// Keep a steady light shower of petals going for the whole visit
// (skipped when the user prefers reduced motion, or if GSAP didn't load)
if (!prefersReducedMotion && hasGSAP) {
    setInterval(spawnPetal, 650);
    for (let i = 0; i < 6; i++) {
        setTimeout(spawnPetal, i * 300); // seed a few immediately so it doesn't feel empty on load
    }
}

/* =========================================================
   HOME SCREEN ENTRANCE ANIMATION
   ========================================================= */
function playHomeEntrance() {
    if (!hasGSAP) return; // elements are already visible by default CSS — safe no-op fallback

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from('#god-image', { y: 40, opacity: 0, scale: 0.9, duration: 1 })
      .from('#divine-heading', { y: 20, opacity: 0, duration: 0.7 }, '-=0.5')
      .from('#divine-subline', { y: 15, opacity: 0, duration: 0.6 }, '-=0.4')
      .from('#start-btn', { y: 15, opacity: 0, duration: 0.6 }, '-=0.3')
      .from('#singer-profile', { x: 60, opacity: 0, duration: 0.8 }, '-=0.5');
}
playHomeEntrance();

/* =========================================================
   NAVIGATION
   ========================================================= */
startBtn.addEventListener('click', () => {
    switchScreen(homeScreen, videoScreen);
    loadVerse(0);
});

homeBtn.addEventListener('click', () => {
    videoElement.pause();
    switchScreen(videoScreen, homeScreen);
    if (hasGSAP) {
        gsap.fromTo('#home-screen .main-frame', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' });
    }
});

nextBtn.addEventListener('click', () => {
    if (currentVerseIndex < bhaktamarVideos.length - 1) {
        currentVerseIndex++;
        loadVerse(currentVerseIndex, 'next');
    } else {
        alert(`Beautiful! You have completed all ${bhaktamarVideos.length} verses of the Bhaktamar Stotra.`);
    }
});

prevBtn.addEventListener('click', () => {
    if (currentVerseIndex > 0) {
        currentVerseIndex--;
        loadVerse(currentVerseIndex, 'prev');
    }
});

// Function to handle clean screen transitions with animations
function switchScreen(hideScreen, showScreen) {
    if (!hasGSAP) {
        hideScreen.classList.remove('active');
        showScreen.classList.add('active');
        return;
    }
    gsap.to(hideScreen, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
            hideScreen.classList.remove('active');
            showScreen.classList.add('active');
            gsap.fromTo(showScreen, { opacity: 0 }, { opacity: 1, duration: 0.6 });
        }
    });
}

/* =========================================================
   VERSE / VIDEO LOADING with transition + loader spinner
   direction: 'next' | 'prev' | undefined -> controls slide direction
   ========================================================= */
function loadVerse(index, direction) {
    // Verse change deserves its own small burst of petals
    if (!prefersReducedMotion && hasGSAP) {
        for (let i = 0; i < 8; i++) {
            setTimeout(spawnPetal, i * 60);
        }
    }

    function setSource() {
        verseNumDisplay.textContent = index + 1;
        videoLoader.classList.add('visible');

        // Setup video source (falls back to the first verse's stream if a path is
        // misconfigured, instead of pointing at a non-video page)
        if (bhaktamarVideos[index].startsWith('http') || !bhaktamarVideos[index].includes('videos/')) {
            videoElement.src = bhaktamarVideos[index];
        } else {
            videoElement.src = bhaktamarVideos[0];
        }

        videoElement.load();

        const hideLoader = () => videoLoader.classList.remove('visible');
        videoElement.addEventListener('loadeddata', hideLoader, { once: true });
        videoElement.addEventListener('error', hideLoader, { once: true });

        videoElement.play().catch(() => {
            hideLoader();
            console.log('Auto-play prevented by browser configuration. User interaction required.');
        });
    }

    if (!hasGSAP) {
        setSource();
    } else {
        const slideOut = direction === 'prev' ? 60 : -60;
        const slideIn = direction === 'prev' ? -60 : 60;

        gsap.to(videoContainer, {
            opacity: 0,
            x: slideOut,
            scale: 0.95,
            duration: 0.35,
            ease: 'power2.in',
            onComplete: () => {
                setSource();
                gsap.fromTo(videoContainer,
                    { opacity: 0, x: slideIn, scale: 0.95 },
                    { opacity: 1, x: 0, scale: 1, duration: 0.45, ease: 'power2.out' }
                );
            }
        });
    }

    // Disable buttons on boundary edges
    prevBtn.classList.toggle('disabled', index === 0);
    nextBtn.classList.toggle('disabled', index === bhaktamarVideos.length - 1);
}
