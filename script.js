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

// Show the REAL total (matches however many videos are actually in the list above),
// so this number stays correct automatically even as more verses get added later
if (totalVerseDisplay) {
    totalVerseDisplay.textContent = bhaktamarVideos.length;
}

// Navigation: Start Button Click
startBtn.addEventListener('click', () => {
    switchScreen(homeScreen, videoScreen);
    loadVerse(0);
});

// Navigation: Back to Home
homeBtn.addEventListener('click', () => {
    videoElement.pause();
    switchScreen(videoScreen, homeScreen);
});

// Navigation: Next Verse
nextBtn.addEventListener('click', () => {
    if (currentVerseIndex < bhaktamarVideos.length - 1) {
        currentVerseIndex++;
        loadVerse(currentVerseIndex);
    } else {
        alert(`Beautiful! You have completed all ${bhaktamarVideos.length} verses of the Bhaktamar Stotra.`);
    }
});

// Navigation: Previous Verse
prevBtn.addEventListener('click', () => {
    if (currentVerseIndex > 0) {
        currentVerseIndex--;
        loadVerse(currentVerseIndex);
    }
});

// Function to handle clean screen transitions with animations
function switchScreen(hideScreen, showScreen) {
    hideScreen.classList.remove('active');
    setTimeout(() => {
        showScreen.classList.add('active');
    }, 200); // Small delay to sync with CSS fade transitions
}

// Function to update video source and apply transition animations
function loadVerse(index) {
    // Apply a quick fade-out flash animation effect to the video player container
    const container = document.querySelector('.video-container');
    container.style.opacity = '0.3';
    container.style.transform = 'scale(0.95)';

    setTimeout(() => {
        // Update data after video scales down
        verseNumDisplay.textContent = index + 1;
        
        // Setup video sources (uses placeholder if local file is missing during testing)
        if(bhaktamarVideos[index].startsWith('http') || !bhaktamarVideos[index].includes('videos/')) {
             videoElement.src = bhaktamarVideos[index];
        } else {
             // Fallback to testing placeholder if local file path isn't mapped yet
             videoElement.src = "https://w3schools.com"; 
        }

        videoElement.load();
        videoElement.play().catch(error => console.log("Auto-play prevented by browser configurations. User interaction required."));

        // Trigger scale up back to normal
        container.style.opacity = '1';
        container.style.transform = 'scale(1)';

        // Nice zoom-in flourish each time a new verse loads (Animate.css)
        container.classList.remove('animate__animated', 'animate__zoomIn');
        void container.offsetWidth; // forces a restart so the animation replays every time
        container.classList.add('animate__animated', 'animate__zoomIn');
    }, 400);

    // Disable buttons on boundary edges
    prevBtn.style.opacity = index === 0 ? '0.5' : '1';
    prevBtn.style.pointerEvents = index === 0 ? 'none' : 'auto';
}

// Falling flower petals effect - runs continuously in the background on every screen
function startFlowerPetals() {
    const container = document.getElementById('flower-container');
    if (!container) return;

    const petalSymbols = ['🌸', '🌺', '🌼', '💮'];

    setInterval(() => {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.textContent = petalSymbols[Math.floor(Math.random() * petalSymbols.length)];

        const startX = Math.random() * 100;       // starting position across the screen (vw)
        const duration = 6 + Math.random() * 6;   // 6-12 seconds to fall
        const size = 16 + Math.random() * 14;     // 16-30px petal size
        const drift = (Math.random() - 0.5) * 150; // px of side-to-side sway

        petal.style.left = startX + 'vw';
        petal.style.fontSize = size + 'px';
        petal.style.animationDuration = duration + 's';
        petal.style.setProperty('--drift', drift + 'px');

        container.appendChild(petal);

        // Clean up the petal element after it finishes falling
        setTimeout(() => petal.remove(), duration * 1000 + 500);
    }, 900);
}

startFlowerPetals();