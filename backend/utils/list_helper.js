const dummy = (...blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  return blogs.reduce((sum, a) => sum + a?.likes, 0);
};


const favoriteBlog =(blogs)=>{
    return Math.max(...blogs.map(each=> each.likes))
}
export default { dummy, totalLikes ,favoriteBlog };
