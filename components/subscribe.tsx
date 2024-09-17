import { GrSend } from "react-icons/gr"

const Subscribe = () => {
  return (
    <div className="max-w-[400px] p-4 flex flex-col gap-4">
      <h3 className="text-2xl md:text-3xl font-bold">Subscribe</h3>
      <p className="mb-2 lg:mb-4 p">Join our newsletter to stay up to date with out features!</p>
      <form action="pathToYourApi" method="post">
        <div className="w-80 flex flex-row items-center gap-x-2 ring-2 ring-blue-950 ring-offset-2 ring-offset-slate-950 rounded-xl bg-slate-900">
          <input className="w-[275px] h-10 bg-slate-900 px-4 rounded-xl" placeholder="youremail@domain.com" type="email" name="email" id="email" required />
          <button type="submit" className="w-7 h-7 flex-center ring-1 ring-slate-800 rounded-lg">
            <GrSend />
          </button>
        </div>
      </form>
    </div>
  )
}
  
export default Subscribe