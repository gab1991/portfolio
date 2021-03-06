function collapseSection(element) {
  // get the height of the element's inner content, regardless of its actual size
  const sectionHeight = element.scrollHeight;

  // temporarily disable all css transitions
  const elementTransition = element.style.transition;
  element.style.transition = '';

  // on the next frame (as soon as the previous style change has taken effect),
  // explicitly set the element's height to its current pixel height, so we
  // aren't transitioning out of 'auto'
  requestAnimationFrame(function () {
    element.style.height = sectionHeight + 'px';
    element.style.transition = elementTransition;

    // on the next frame (as soon as the previous style change has taken effect),
    // have the element transition to height: 0
    requestAnimationFrame(function () {
      element.style.height = 0 + 'px';
    });
  });

  // mark the section as "currently collapsed"
  element.setAttribute('data-collapsed', 'true');
}

function expandSection(element) {
  // get the height of the element's inner content, regardless of its actual size
  const sectionHeight = element.scrollHeight;

  // have the element transition to the height of its inner content
  element.style.height = sectionHeight + 'px';

  // when the next css transition finishes (which should be the one we just triggered)
  element.addEventListener('transitionend', function bam(e) {
    // remove this event listener so it only gets triggered once
    element.removeEventListener('transitionend', bam);

    // remove "height" from the element's inline styles, so it can return to its initial value
    element.style.height = null;
  });

  // mark the section as "currently not collapsed"
  element.setAttribute('data-collapsed', 'false');
}

export default function toggleExpandSection(
  elmRef,
  blockTransitionClass,
  transitionBlockDelay = 400
) {
  var isFirstLoad = elmRef.getAttribute('data-firstload') === 'true';
  var isCollapsed = elmRef.getAttribute('data-collapsed') === 'true';
  let timer;

  if (isFirstLoad) {
    elmRef.classList.add(blockTransitionClass);
    clearTimeout(timer);

    timer = setTimeout(() => {
      elmRef.classList.remove(blockTransitionClass);
      elmRef.removeAttribute('data-firstload', false);
    }, transitionBlockDelay);
  }

  if (isCollapsed) {
    expandSection(elmRef);
    elmRef.setAttribute('data-collapsed', 'false');
  } else {
    collapseSection(elmRef);
  }
}
