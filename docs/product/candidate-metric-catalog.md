# Candidate metric catalog

## Status

**Candidate.** This catalog starts from the imported prototype and Product Owner input. It is not yet a final measurement protocol, data schema or Product Specification.

## Candidate metrics for the initial visual mapping

| Group | Candidate metrics | Origin |
| --- | --- | --- |
| Body baseline | height; weight | imported prototype and Product Owner input |
| Trunk circumferences | thorax/chest; abdomen; hip; glutes | imported prototype and Product Owner input |
| Upper limb circumferences | right arm; left arm | imported prototype |
| Lower limb circumferences | right thigh; left thigh | imported prototype |
| Additional body measures | shoulders; wingspan | imported prototype |

All circumference measurements are candidates to be represented by the avatar-based visual mapping. The catalog intentionally does not imply that every metric must be collected in the first interaction.

## Decision on completeness and avatar accuracy

- An incomplete collection does not block the student from using the product.
- Avatar accuracy depends on a complete metric collection.
- The product must explicitly communicate the relationship between completeness and avatar accuracy to the student.
- The product communicates incomplete mapping through an accuracy percentage, pending regions on the avatar and a remaining-collection checklist.
- The calculation behind the accuracy percentage and the visual state of each pending region remain Product Engineering questions.

## Terminology requiring confirmation

- Whether `thorax` and `chest` denote the same measurement and collection point.
- Whether `hip` and `glutes` are distinct measurements, and their precise collection points.
- Whether shoulders and wingspan belong to the first release or are optional/advanced measurements.
- Which member measurements matter beyond arms and thighs.

## Product consequences not yet specified

- collection guidance and validation for each measurement;
- required versus optional measurements;
- units, precision and accepted ranges;
- how a missing metric appears in the avatar mapping;
- comparability rules between collections;
- which metrics contribute to each performance or RPG progression signal.
