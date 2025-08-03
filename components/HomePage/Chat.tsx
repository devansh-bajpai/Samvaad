import React from 'react'
import UserSearch from './UserSearch'

export default function Chat() {
  return (
//     <div className="flex h-[600px] w-3/4 bg-base-200">
//   {/* Left: User List */}
//   <div className="w-1/4 border-r border-base-300 bg-base-100 p-4">
//     <h2 className="text-xl font-bold mb-4">Chats</h2>
//     <ul className="space-y-2">
//       {["Alice", "Bob", "Charlie"].map((user, i) => (
//         <li key={i}>
//           <button className="btn btn-ghost w-full justify-start text-left">
//             <div className="avatar mr-3">
//               <div className="w-8 rounded-full">
//                 <img src={`https://api.dicebear.com/6.x/initials/svg?seed=${user}`} />
//               </div>
//             </div>
//             {user}
//           </button>
//         </li>
//       ))}
//     </ul>
//   </div>

//   {/* Right: Chat Display */}
//   <div className="flex-1 flex flex-col">
//     <div className="p-4 border-b border-base-300 bg-base-100">
//       <h2 className="text-xl font-semibold">Chat with Alice</h2>
//     </div>
//     <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-base-200">
//       <div className="chat chat-start">
//         <div className="chat-bubble">Hey!</div>
//       </div>
//       <div className="chat chat-end">
//         <div className="chat-bubble chat-bubble-primary">Hello!</div>
//       </div>
//       <div className="chat chat-start">
//         <div className="chat-bubble">What’s up?</div>
//       </div>
//     </div>
//     <div className="p-4 border-t border-base-300 bg-base-100">
//       <input
//         type="text"
//         placeholder="Type a message"
//         className="input input-bordered w-full"
//       />
//     </div>
//   </div>
// </div>
    <UserSearch/>

  )
}
