|       |         |
|-------|---------|
| Color | Type    |
|       | Decimal |

The **decimal** type is a 128-bit data type suitable for precise, but
limited-range calculations. The decimal type can represent values
ranging from ±1.0x10<sup>–28</sup> to approximately ±7.9x10<sup>28</sup>
with 28 or 29 significant digits.

The finite set of values of type decimal are of the form (-1)^s \* c \*
10<sup>–e</sup>, where the sign s is 0 or 1, the coefficient c is given
by 0 \<= c \< 2<sup>96</sup>, and the scale e is such that 0 \<= e \<=
28. The decimal type does not support signed zeros, infinities, or
NaN's. A decimal is represented as a 96-bit integer scaled by a power of
ten. For decimals with an absolute value less than 1.0, the value is
exact to the 28th decimal place, but no further. For decimals with an
absolute value greater than or equal to 1.0, the value is exact to 28 or
29 digits. Contrary to the float and double data types, decimal
fractional numbers such as 0.1 can be represented exactly in the decimal
representation. In the float and double representations, such numbers
are often infinite fractions, making those representations more prone to
round-off errors.

The result of an operation on values of type decimal is that which would
result from calculating an exact result (preserving scale, as defined
for each operator) and then rounding to fit a decimal. Results are
rounded to the nearest decimal value, and, when a result is equally
close to two decimal values, to the value that has an even number in the
least significant digit position (this is known as "banker's rounding").
A zero result always has a sign of 0 and a scale of 0.

If a decimal arithmetic operation produces a value less than or equal to
5x10<sup>–29</sup> in absolute value, the result of the operation
becomes zero. If a decimal arithmetic operation produces an absolute
result that is too large for the decimal format, the result node gets
put into an error state (visual turns red) .

The decimal type has greater precision but smaller range than the
floating-point types. Thus, conversions from the floating-point types to
decimal might cause the result node to get put into an error state
(visual turns red), and conversions from decimal to the floating-point
types might cause loss of precision.

[Category:Types](Category:Types "wikilink")