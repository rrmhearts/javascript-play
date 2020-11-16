import React, { useState } from "react";
import styled from "@emotion/styled";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// Create new array using key. Complicated way around..
const initial = Array.from({ length: 10 }, (v, k) => {
// const initial = new Array(10).fill(0).map((v, k) => {
  return {
    id: `id-${k}`,
    content: `Quote ${k}`
  };
});

const grid = 8;
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  // remove the startIndex item
  const [removed] = result.splice(startIndex, 1);
  // add that item to endIndex in array.
  result.splice(endIndex, 0, removed);

  return result;
};

const QuoteItem = styled.div`
  width: 200px;
  border: 1px solid grey;
  margin-bottom: ${grid}px;
  background-color: lightblue;
  padding: ${grid}px;
`;

function Quote({ quote, index }) {
  return (
    // A draggable bar.. has unique id
    <Draggable draggableId={quote.id} index={index}>
      {provided => ( // draggable setup HOC
        <QuoteItem // The actual item.
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {quote.content}
        </QuoteItem>
      )}
    </Draggable>
  );
}

const QuoteList = React.memo(function QuoteList({ quotes }) {
  return quotes.map((quote/*: QuoteType*/, index/*: number*/) => (
    <Quote quote={quote} index={index} key={quote.id} />
  ));
});

function QuoteApp() {
  const [state, setState] = useState({ quotes: initial });

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    // When dragging complete, update array.
    const quotes = reorder(
      state.quotes,
      result.source.index,
      result.destination.index
    );

    setState({ quotes });
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {provided => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {/* The wrapped content is an array of quotes */}
            <QuoteList quotes={state.quotes} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
export default QuoteApp;