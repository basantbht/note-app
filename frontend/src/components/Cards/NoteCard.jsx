import moment from "moment";
import React from "react";
import { MdOutlinePushPin } from "react-icons/md";
import { MdCreate, MdDelete } from "react-icons/md";

const NoteCard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}) => {

  return (
    <div className="border border-gray-700 rounded p-4 bg-white hover:shadow-xl transition-all ease-in-out">
      <div className="flex items-center justify-between">
        <div>
          <h6 className="text-xl font-medium">{title}</h6>
          <span className="text-sm mt-1 text-slate-800">{moment(date).format('Do MMM YYYY')}</span>
        </div>

        <MdOutlinePushPin
          className={`icon-btn cursor-pointer hover:text-primary ${isPinned ? "text-primary" : "text-slate-800"}`}
          onClick={onPinNote}
        />
      </div>

      <p className="text-xs text-slate-800 mt-2">{content?.slice(0, 60)}</p>

      <div className="flex items-center justify-between mt-2">
        <div className="text-xs text-slate-900">{tags.map((item) => `#${item}`)}</div>

        <div className="flex items-center gap-2">
          <MdCreate
            className="icon-btn cursor-pointer text-slate-800 hover:text-green-600"
            onClick={onEdit}
          />

          <MdDelete
            className="icon-btn cursor-pointer text-slate-800 hover:text-red-500"
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
