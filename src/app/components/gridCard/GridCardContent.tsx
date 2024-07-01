import {
  GridCardContentStyle,
  CardItemStyle,
  GridRowSpacing,
} from "./GridCardContent.Style";
import {
  buildRichTextContent,
  HandleRadixVariants,
} from "../../../../lib/helper";
import * as React from "react";
import {
  Button,
  Box,
  Card,
  Flex,
  TextField,
  Grid,
  Text,
  Inset,
} from "@radix-ui/themes";
import { GridCard, GridRow, Card as CardType } from "../../../../types";

export function GridCardContent(gridCard: GridCard) {
  let bgColorCode = gridCard?.cardSettings?.backgroundColor?.code;

  return (
    <GridCardContentStyle cardBGColor={bgColorCode}>
      {gridCard?.cardSettings?.showAsCard ? (
        <Card
          variant={HandleRadixVariants(gridCard?.cardSettings?.cardVariant)}
        >
          {gridCard?.title && (
            <h4>
              <Text>{gridCard.title}</Text>
            </h4>
          )}
          {gridCard.content && buildRichTextContent(gridCard.content)}
          {gridCard.row && gridCard.row.map((row: GridRow, gridRowIndex) => (
            <>
              {!row.disabled && (
                <Flex
                  key={gridRowIndex}
                  gap={row.cardSpacing ? row.cardSpacing : "3"}
                >
                     {row?.rowTitle && (
                   <div><h4>{row.rowTitle}</h4></div>
                  )}  
                  {row?.content && (
                    buildRichTextContent(row.content)
                  )}  
                  {row.card && (
                    <>
                      {row.card.map((card: CardType, cardIndex) => (
                        <>
                          {!card.disabled && (
                            <Box
                              key={cardIndex}
                              width={
                                row.columnDivision?.split(",")[cardIndex] + "%"
                              }
                            >
                              {card.showAsCard ? (
                                <>
                                  {card?.backgroundColor?.code ? (
                                    <Card
                                      style={{
                                        height: "100%",
                                        backgroundColor:
                                          card.backgroundColor.code,
                                      }}
                                      variant={HandleRadixVariants(
                                        card?.cardVariant
                                      )}
                                    >
                                      {card.insetImage && (
                                        <Inset
                                          clip="padding-box"
                                          side="top"
                                          pb="current"
                                        >
                                          <img
                                            src={card.insetImage}
                                            alt="Bold typography"
                                            style={{
                                              display: "block",
                                              objectFit: "cover",
                                              width: "100%",
                                              height: 140,
                                              backgroundColor: "var(--gray-5)",
                                            }}
                                          />
                                        </Inset>
                                      )}

                                      {card.content &&
                                        buildRichTextContent(card.content)}
                                    </Card>
                                  ) : (
                                    <Card
                                      style={{ height: "100%" }}
                                      variant={HandleRadixVariants(
                                        card?.cardVariant
                                      )}
                                    >
                                      {card.insetImage && (
                                        <Inset
                                          clip="padding-box"
                                          side="top"
                                          pb="current"
                                        >
                                          <img
                                            src={card.insetImage}
                                            alt="Bold typography"
                                            style={{
                                              display: "block",
                                              objectFit: "cover",
                                              width: "100%",
                                              height: 140,
                                              backgroundColor: "var(--gray-5)",
                                            }}
                                          />
                                        </Inset>
                                      )}

                                      {card.content &&
                                        buildRichTextContent(card.content)}
                                    </Card>
                                  )}
                                </>
                              ) : (
                                <>
                                  {card?.backgroundColor?.code ? (
                                    <CardItemStyle
                                      cardBGColor={card.backgroundColor.code}
                                    >
                                      {card.content &&
                                        buildRichTextContent(card.content)}
                                    </CardItemStyle>
                                  ) : (
                                    <>
                                      {card.content &&
                                        buildRichTextContent(card.content)}
                                    </>
                                  )}
                                </>
                              )}
                            </Box>
                          )}
                        </>
                      ))}
                    </>
                  )}
                </Flex>
              )}
            </>
          ))}
        </Card>
      ) : (
        <>
          {gridCard?.title && (
            <h4>
              <Text>{gridCard.title}</Text>
            </h4>
          )}
            {gridCard.content && buildRichTextContent(gridCard.content)}
          {gridCard.row && gridCard.row.map((row: GridRow, gridRowIndex) => (
            <>
              {!row.disabled && 
                <>
                  {row?.rowTitle && (
                    <h4>{row.rowTitle}</h4>
                  )}  
                  {row?.content && (
                    buildRichTextContent(row.content)
                  )}    
                </>
              }  
              {!row.disabled && (
                <Flex
                  key={gridRowIndex}
                  gap={row.cardSpacing ? row.cardSpacing : "3"}
                >
                
                  {row.card && (
                    <>
                      {row.card.map((card: CardType, cardIndex) => (
                        <>
                          {!card.disabled && (
                            <Box
                              key={cardIndex}
                              width={
                                row.columnDivision?.split(",")[cardIndex] + "%"
                              }
                            >
                              {card.showAsCard ? (
                                <>
                                  {card?.backgroundColor?.code ? (
                                    <Card
                                      style={{
                                        height: "100%",
                                        backgroundColor:
                                          card.backgroundColor.code,
                                      }}
                                      variant={HandleRadixVariants(
                                        card?.cardVariant
                                      )}
                                    >
                                      {card.insetImage && (
                                        <Inset
                                          clip="padding-box"
                                          side="top"
                                          pb="current"
                                        >
                                          <img
                                            src={card.insetImage}
                                            alt="Bold typography"
                                            style={{
                                              display: "block",
                                              objectFit: "cover",
                                              width: "100%",
                                              height: 140,
                                              backgroundColor: "var(--gray-5)",
                                            }}
                                          />
                                        </Inset>
                                      )}

                                      {card.content &&
                                        buildRichTextContent(card.content)}
                                    </Card>
                                  ) : (
                                    <Card
                                      style={{ height: "100%" }}
                                      variant={HandleRadixVariants(
                                        card?.cardVariant
                                      )}
                                    >
                                      {card.insetImage && (
                                        <Inset
                                          clip="padding-box"
                                          side="top"
                                          pb="current"
                                        >
                                          <img
                                            src={card.insetImage}
                                            alt="Bold typography"
                                            style={{
                                              display: "block",
                                              objectFit: "cover",
                                              width: "100%",
                                              height: 140,
                                              backgroundColor: "var(--gray-5)",
                                            }}
                                          />
                                        </Inset>
                                      )}

                                      {card.content &&
                                        buildRichTextContent(card.content)}
                                    </Card>
                                  )}
                                </>
                              ) : (
                                <>
                                  {card?.backgroundColor?.code ? (
                                    <CardItemStyle
                                      cardBGColor={card.backgroundColor.code}
                                    >
                                      {card.content &&
                                        buildRichTextContent(card.content)}
                                    </CardItemStyle>
                                  ) : (
                                    <>
                                      {card.content &&
                                        buildRichTextContent(card.content)}
                                    </>
                                  )}
                                </>
                              )}
                            </Box>
                          )}
                        </>
                      ))}
                    </>
                  )}
                </Flex>
              )}
              {row?.rowSpacing && (
                <GridRowSpacing rowSpace={row.rowSpacing}></GridRowSpacing>
              )}
            </>
          ))}
        </>
      )}

      {gridCard.cardSettings?.cardDivider && <hr />}
    </GridCardContentStyle>
  );
}

export default GridCardContent;
