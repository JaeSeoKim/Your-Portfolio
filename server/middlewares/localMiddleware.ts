const localMiddleware = (
  req: { user: null; next: () => void },
  res: { locals: { sitename: string; loggedUser: any } },
  next: () => void
) => {
  res.locals.loggedUser = req.user || null
  next()
}

export default localMiddleware

// export const onlyPublic = (
//   req: { user: any; flash: (arg0: string, arg1: string) => void },
//   res: { redirect: (arg0: any) => void },
//   next: () => void
// ) => {
//   if (req.user) {
//     req.flash("info", "You are logged!!")
//     res.redirect("/")
//   } else {
//     next()
//   }
// }

// export const onlyPrivate = (
//   req: { user: any; flash: (arg0: string, arg1: string) => void },
//   res: { redirect: (arg0: any) => void },
//   next: () => void
// ) => {
//   if (req.user) {
//     next()
//   } else {
//     req.flash("info", "You need login!!")
//     res.redirect("/")
//   }
// }
