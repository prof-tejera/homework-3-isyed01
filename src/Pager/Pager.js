import { useState, useEffect } from "react";
import Panel from "components/Panel/Panel";
import Button from "components/Button/Button";
import "./Pager.css";

const Pager = ({  startPage=1, total=12, tabsBuffer=2 }) => {
  const [current,setCurrentPage] = useState(startPage);

  // Calculate maximum number of sequential pages to show
  const numTabs = tabsBuffer*2+1;

  // Defines which page is shown first in the range of clickable page numbers
  const [rangeStart,setRangeStart] = useState(1)

  // Chnage the active state of the items within the state based on the id just selected
  const handleSelect = (e) => setCurrentPage( parseInt(e.target.value) )

  // Side-effects of changing currentPage
  useEffect(()=>{
    console.log(`current=${current}`)
    let rangeStart;
    rangeStart = current > tabsBuffer+1 ? current-tabsBuffer : 1;
    rangeStart = rangeStart > total-tabsBuffer-2 ?  total-(tabsBuffer*2) : rangeStart;
    setRangeStart(rangeStart);
  },[current])



  const PreviousPageButton = () => <Button
    text="&lt;"
    disabled={current === 1}
    value={current - 1}
    onClick={handleSelect}
  />
  const NextPageButton = () => <Button
    text="&gt;"
    disabled={current === total}
    value={current + 1}
    onClick={handleSelect}
  />

  // Show the first page jump button only if its not shown within currently displayed tab sequence
  const FirstPageJumpButton = () => rangeStart > 1 ? <Button text={1} value={1} onClick={handleSelect} />  : "";

  // Show the last page jump button only if its not shown within currently displayed tab sequence
  const LastPageJumpButton = () => rangeStart < total - tabsBuffer*2 ?  <Button text={total} value={total} onClick={handleSelect} />  : "";

  // Only displayed when first page is no longer in sequence with the range
  const LowerEllipsis = () => rangeStart > 2 ? <span className="ellipsis">...</span> : ""

  // Only displayed when last page is no longer in sequence with the range
  const UppoerEllipsis = () => rangeStart < (total - tabsBuffer*2) -1 ? <Button text="..."/> : ""

  const PageRangeToolbar = () => Array(numTabs).fill().map((item, index) => 
  <Button 
    key={index} 
    value={rangeStart+index}
    text={rangeStart+index}
    className={current===rangeStart+index?"active":""}
    onClick={handleSelect}
  /> 
)



  return <Panel>
    <div className="pager">
    <PreviousPageButton />
    <FirstPageJumpButton />
    <LowerEllipsis />
    <PageRangeToolbar />
    <UppoerEllipsis />
    <LastPageJumpButton />
     <NextPageButton />
     </div>
  </Panel>
};

export default Pager;
