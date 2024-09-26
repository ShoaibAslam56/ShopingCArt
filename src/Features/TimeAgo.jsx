import { parseISO , formatDistanceToNow, format } from "date-fns";

const TimeAgo = ({  timestamp  }) => {
    let timeAgo = ''
    if (timestamp) {
        const date = parseISO(timestamp);
        timeAgo = format(date, 'yyyy-MM-dd h:mm a');
    } 
  return (
    <span title={timestamp}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  )
}

export default TimeAgo
 